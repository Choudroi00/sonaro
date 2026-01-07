import {
  loadTensorflowModel,
  type TensorflowModel,
} from 'react-native-fast-tflite';

export type MLResult = {
  hasIssue: boolean;
  logits: [number, number];
};

export const MODELS = {
  braking: require('../../../assets/models/bracking_state_classifier.tflite'),
  idle: require('../../../assets/models/idle_state_classifier.tflite'),
  startup: require('../../../assets/models/ss_classifier.tflite'),
} as const;

export type TestType = keyof typeof MODELS;

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
    // The model expects a 1D tensor of float32 audio
    const output = await currentModel.run([waveform]);
    const logits = Array.from(output[0] as Float32Array) as [number, number];

    // x2 represents issue detection state
    // if max(x1, x2) is x2 then it's a issue detection positive
    const hasIssue = logits[1] > logits[0];

    return {
      hasIssue,
      logits,
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
