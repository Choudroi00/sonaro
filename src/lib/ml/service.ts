import {
  loadTensorflowModel,
  type TensorflowModel,
} from 'react-native-fast-tflite';

export type MLResult = {
  hasIssue: boolean;
  logit: number;
};

export const MODELS = {
  braking: require('../../../assets/models/bracking_state_classifier.tflite'),
  idle: require('../../../assets/models/idle_state_classifier.tflite'),
  startup: require('../../../assets/models/ss_classifier.tflite'),
} as const;

export type TestType = keyof typeof MODELS;

let currentModel: TensorflowModel | null = null;
let currentTestType: TestType | null = null;

const SAMPLE_RATE = 16000;
const TARGET_WAVEFORM_SAMPLES = 160000;
const FFT_SIZE = 512;
const HOP_LENGTH = 160;
const EPSILON = 1e-6;
const DEFAULT_MEL_BANDS = 64;
const DEFAULT_TIME_FRAMES = 1000;

type MelInputConfig = {
  melBands: number;
  timeFrames: number;
  timeFirst: boolean;
};

function normalizeWaveformLength(
  waveform: Float32Array,
  targetLength: number
): Float32Array {
  if (waveform.length === targetLength) return waveform;
  if (waveform.length > targetLength) {
    return waveform.slice(0, targetLength);
  }

  const padded = new Float32Array(targetLength);
  padded.set(waveform);
  return padded;
}

function createHannWindow(size: number): Float32Array {
  const window = new Float32Array(size);
  for (let i = 0; i < size; i++) {
    window[i] = 0.5 * (1 - Math.cos((2 * Math.PI * i) / (size - 1)));
  }
  return window;
}

function fftInPlace(real: Float32Array, imag: Float32Array) {
  const n = real.length;
  let j = 0;
  for (let i = 1; i < n; i++) {
    let bit = n >> 1;
    while (j & bit) {
      j ^= bit;
      bit >>= 1;
    }
    j ^= bit;
    if (i < j) {
      [real[i], real[j]] = [real[j], real[i]];
      [imag[i], imag[j]] = [imag[j], imag[i]];
    }
  }

  for (let len = 2; len <= n; len <<= 1) {
    const angle = (-2 * Math.PI) / len;
    const wLenR = Math.cos(angle);
    const wLenI = Math.sin(angle);
    for (let i = 0; i < n; i += len) {
      let wR = 1;
      let wI = 0;
      for (let k = 0; k < len / 2; k++) {
        const evenIndex = i + k;
        const oddIndex = evenIndex + len / 2;
        const oddR = real[oddIndex];
        const oddI = imag[oddIndex];

        const vR = oddR * wR - oddI * wI;
        const vI = oddR * wI + oddI * wR;
        const uR = real[evenIndex];
        const uI = imag[evenIndex];

        real[evenIndex] = uR + vR;
        imag[evenIndex] = uI + vI;
        real[oddIndex] = uR - vR;
        imag[oddIndex] = uI - vI;

        const nextWR = wR * wLenR - wI * wLenI;
        wI = wR * wLenI + wI * wLenR;
        wR = nextWR;
      }
    }
  }
}

function hzToMel(hz: number): number {
  return 2595 * Math.log10(1 + hz / 700);
}

function melToHz(mel: number): number {
  return 700 * (10 ** (mel / 2595) - 1);
}

function createMelFilterbank(
  melBands: number,
  fftSize: number,
  sampleRate: number
): Float32Array[] {
  const nFftBins = Math.floor(fftSize / 2) + 1;
  const lowMel = hzToMel(0);
  const highMel = hzToMel(sampleRate / 2);
  const melStep = (highMel - lowMel) / (melBands + 1);

  const melPoints = new Float32Array(melBands + 2);
  for (let i = 0; i < melPoints.length; i++) {
    melPoints[i] = lowMel + i * melStep;
  }

  const hzPoints = Array.from(melPoints, melToHz);
  const binPoints = hzPoints.map((hz) =>
    Math.floor(((fftSize + 1) * hz) / sampleRate)
  );

  const filters: Float32Array[] = [];
  for (let i = 0; i < melBands; i++) {
    const filter = new Float32Array(nFftBins);
    const left = Math.max(0, Math.min(binPoints[i], nFftBins - 1));
    const center = Math.max(0, Math.min(binPoints[i + 1], nFftBins - 1));
    const right = Math.max(0, Math.min(binPoints[i + 2], nFftBins - 1));

    if (center > left) {
      for (let bin = left; bin < center; bin++) {
        filter[bin] = (bin - left) / (center - left);
      }
    }
    if (right > center) {
      for (let bin = center; bin < right; bin++) {
        filter[bin] = (right - bin) / (right - center);
      }
    }
    filters.push(filter);
  }

  return filters;
}

function inferMelInputConfig(shape: number[] | undefined): MelInputConfig {
  if (!shape || shape.length === 0) {
    return {
      melBands: DEFAULT_MEL_BANDS,
      timeFrames: DEFAULT_TIME_FRAMES,
      timeFirst: false,
    };
  }

  const nonBatchShape = shape.length > 1 ? shape.slice(1) : shape;
  const nonUnitDims = nonBatchShape.filter((dimension) => dimension > 1);

  if (nonUnitDims.length >= 2) {
    const [first, second] = nonUnitDims;
    const firstIsTime = first > second;
    return {
      melBands: firstIsTime ? second : first,
      timeFrames: firstIsTime ? first : second,
      timeFirst: firstIsTime,
    };
  }

  if (nonUnitDims.length === 1 && nonUnitDims[0] <= 4096) {
    return {
      melBands: DEFAULT_MEL_BANDS,
      timeFrames: nonUnitDims[0],
      timeFirst: false,
    };
  }

  return {
    melBands: DEFAULT_MEL_BANDS,
    timeFrames: DEFAULT_TIME_FRAMES,
    timeFirst: false,
  };
}

function resizeAndFlattenMel(
  melByBand: Float32Array[],
  targetTimeFrames: number,
  timeFirst: boolean
): Float32Array {
  const melBands = melByBand.length;
  const sourceTimeFrames = melByBand[0]?.length ?? 0;
  const output = new Float32Array(melBands * targetTimeFrames);

  if (sourceTimeFrames === 0) {
    return output;
  }

  const getSourceTimeIndex = (targetIndex: number) => {
    if (targetTimeFrames <= 1 || sourceTimeFrames <= 1) return 0;
    return Math.min(
      sourceTimeFrames - 1,
      Math.round(
        (targetIndex * (sourceTimeFrames - 1)) / (targetTimeFrames - 1)
      )
    );
  };

  if (timeFirst) {
    for (let timeIndex = 0; timeIndex < targetTimeFrames; timeIndex++) {
      const sourceTimeIndex = getSourceTimeIndex(timeIndex);
      for (let melIndex = 0; melIndex < melBands; melIndex++) {
        output[timeIndex * melBands + melIndex] =
          melByBand[melIndex][sourceTimeIndex];
      }
    }
    return output;
  }

  for (let melIndex = 0; melIndex < melBands; melIndex++) {
    for (let timeIndex = 0; timeIndex < targetTimeFrames; timeIndex++) {
      const sourceTimeIndex = getSourceTimeIndex(timeIndex);
      output[melIndex * targetTimeFrames + timeIndex] =
        melByBand[melIndex][sourceTimeIndex];
    }
  }

  return output;
}

function waveformToLogMelSpectrogram(
  waveform: Float32Array,
  config: MelInputConfig
): Float32Array {
  const normalizedWaveform = normalizeWaveformLength(
    waveform,
    TARGET_WAVEFORM_SAMPLES
  );

  const paddedWaveform =
    normalizedWaveform.length < FFT_SIZE
      ? normalizeWaveformLength(normalizedWaveform, FFT_SIZE)
      : normalizedWaveform;

  const frameCount =
    Math.floor((paddedWaveform.length - FFT_SIZE) / HOP_LENGTH) + 1;
  const window = createHannWindow(FFT_SIZE);
  const filters = createMelFilterbank(config.melBands, FFT_SIZE, SAMPLE_RATE);
  const nFftBins = Math.floor(FFT_SIZE / 2) + 1;
  const melByBand = Array.from(
    { length: config.melBands },
    () => new Float32Array(frameCount)
  );

  const real = new Float32Array(FFT_SIZE);
  const imag = new Float32Array(FFT_SIZE);
  const powerSpectrum = new Float32Array(nFftBins);

  for (let frame = 0; frame < frameCount; frame++) {
    const start = frame * HOP_LENGTH;
    real.fill(0);
    imag.fill(0);

    for (let i = 0; i < FFT_SIZE; i++) {
      real[i] = paddedWaveform[start + i] * window[i];
    }

    fftInPlace(real, imag);

    for (let bin = 0; bin < nFftBins; bin++) {
      const magnitudeSquared = real[bin] * real[bin] + imag[bin] * imag[bin];
      powerSpectrum[bin] = magnitudeSquared;
    }

    for (let melIndex = 0; melIndex < config.melBands; melIndex++) {
      const filter = filters[melIndex];
      let melEnergy = 0;
      for (let bin = 0; bin < nFftBins; bin++) {
        melEnergy += powerSpectrum[bin] * filter[bin];
      }
      melByBand[melIndex][frame] = Math.log(Math.max(melEnergy, EPSILON));
    }
  }

  return resizeAndFlattenMel(melByBand, config.timeFrames, config.timeFirst);
}

async function loadModel(testType: TestType) {
  if (currentModel && currentTestType === testType) return;
  try {
    currentModel = await loadTensorflowModel(MODELS[testType]);
    currentTestType = testType;
    console.log(`Model ${testType} loaded successfully`);
    console.log('Model inputs:', JSON.stringify(currentModel.inputs));
    console.log('Model outputs:', JSON.stringify(currentModel.outputs));
  } catch (err) {
    console.error(`Failed to load model ${testType}`, err);
  }
}

/**
 * Runs inference on the provided waveform.
 * @param waveform 1D tensor of float32 mono audio at 16kHz
 */
async function runInference(waveform: Float32Array): Promise<MLResult | null> {
  if (!currentModel) {
    console.error('Model not loaded');
    return null;
  }

  try {
    const inputConfig = inferMelInputConfig(currentModel.inputs[0]?.shape);
    const modelInput = waveformToLogMelSpectrogram(waveform, inputConfig);
    const output = await currentModel.run([modelInput]);
    const rawOutput = output[0];
    const logit = Number((rawOutput as Float32Array)[0]);
    const hasIssue = logit > 0;

    return {
      hasIssue,
      logit,
    };
  } catch (err) {
    console.error('Inference failed', err);
    return null;
  }
}

export const mlService = {
  loadModel,
  runInference,
};
