import { loadTensorflowModel } from 'react-native-fast-tflite';

export type MLResult = {
  hasIssue: boolean;
  logits: [number, number];
};

class MLService {
  private model: any = null;

  async loadModel() {
    if (this.model) return;
    try {
      // Load one of the models as default
      this.model = await loadTensorflowModel(
        require('../../../assets/models/bracking_state_classifier.tflite')
      );
      console.log('Model loaded successfully');
    } catch (err) {
      console.error('Failed to load model', err);
    }
  }

  async runInference(inputData: Float32Array): Promise<MLResult | null> {
    if (!this.model) {
      console.error('Model not loaded');
      return null;
    }

    try {
      // Assuming the model takes a Float32Array and returns [x1, x2]
      const output = await this.model.run([inputData]);
      const logits = output[0] as [number, number];

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
}

export const mlService = new MLService();
