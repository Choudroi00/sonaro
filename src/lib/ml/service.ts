import {
  loadTensorflowModel,
  type TensorflowModel,
} from 'react-native-fast-tflite';

export type MLResult = {
  hasIssue: boolean;
  logits: number[];
  argmaxIndex: number;
};

export const MODELS = {
  braking: require('../../../assets/models/yamnet_audio_classifier.tflite'),
  idle: require('../../../assets/models/idle_state_classifier.tflite'),
  startup: require('../../../assets/models/startup_state_classifier.tflite'),
} as const;

export type TestType = keyof typeof MODELS;

const ISSUE_CLASS_INDEX_BY_TEST: Partial<Record<TestType, number[]>> = {
  braking: [1],
  idle: [1],
  startup: [1],
};

let currentModel: TensorflowModel | null = null;
let currentTestType: TestType | null = null;

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

function getRequiredInputSampleCount(model: TensorflowModel): number | null {
  const inputShape = model.inputs?.[0]?.shape;
  if (!inputShape || inputShape.length === 0) return null;

  const positiveDims = inputShape.filter(
    (dim) => Number.isFinite(dim) && dim > 0
  );

  if (positiveDims.length === 0) return null;

  return positiveDims.reduce((total, dim) => total * dim, 1);
}

function normalizeWaveformLength(
  waveform: Float32Array,
  requiredSize: number
): Float32Array {
  if (requiredSize <= 0 || !Number.isFinite(requiredSize)) {
    return waveform;
  }

  if (waveform.length === requiredSize) {
    return waveform;
  }

  if (waveform.length > requiredSize) {
    return waveform.slice(0, requiredSize);
  }

  const padded = new Float32Array(requiredSize);
  padded.set(waveform);
  return padded;
}

function getHasIssue(
  logits: number[],
  argmaxIndex: number,
  testType: TestType | null
): boolean {
  if (logits.length === 0) return false;

  if (testType) {
    const mappedIssueIndexes = ISSUE_CLASS_INDEX_BY_TEST[testType];
    if (mappedIssueIndexes && mappedIssueIndexes.length > 0) {
      return mappedIssueIndexes.includes(argmaxIndex);
    }
  }

  if (logits.length === 1) {
    return logits[0] > 0;
  }

  return argmaxIndex > 0;
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
    const requiredSampleCount = getRequiredInputSampleCount(currentModel);
    const preparedWaveform = normalizeWaveformLength(
      waveform,
      requiredSampleCount ?? waveform.length
    );

    const output = await currentModel.run([preparedWaveform]);
    const logits = Array.from(output[0] as Float32Array);

    if (logits.length === 0) {
      console.error('Inference returned empty logits');
      return null;
    }

    let argmaxIndex = 0;
    for (let i = 1; i < logits.length; i++) {
      if (logits[i] > logits[argmaxIndex]) {
        argmaxIndex = i;
      }
    }

    const hasIssue = getHasIssue(logits, argmaxIndex, currentTestType);

    return {
      hasIssue,
      logits,
      argmaxIndex,
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
