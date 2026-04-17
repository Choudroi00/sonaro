import { create } from 'zustand';

import { audioService } from '@/lib/audio/service';
import { mlService, type TestType } from '@/lib/ml/service';
import { getPCMDataFromWav } from '@/lib/utils';

export type DiagnosticStatus =
  | 'idle'
  | 'recording'
  | 'analyzing'
  | 'finished'
  | 'error';

interface DiagnosticState {
  status: DiagnosticStatus;
  result: any;
  duration: number;
  sliceCount: number;
  testType: TestType;
  setStatus: (status: DiagnosticStatus) => void;
  setResult: (result: any) => void;
  setDuration: (duration: number) => void;
  setTestType: (testType: TestType) => void;
  reset: () => void;
  startDiagnostic: () => Promise<void>;
  stopDiagnostic: () => Promise<void>;
}

export const useDiagnosticStore = create<DiagnosticState>((set, get) => ({
  status: 'idle',
  result: null,
  duration: 0,
  sliceCount: 0,
  testType: 'braking',

  setStatus: (status) => set({ status }),
  setResult: (result) => set({ result }),
  setDuration: (duration) => set({ duration }),
  setTestType: (testType) => set({ testType }),

  reset: () =>
    set({ status: 'idle', result: null, duration: 0, sliceCount: 0 }),

  stopDiagnostic: async () => {
    await audioService.stopRecording();
    set({ status: 'finished' });
  },

  startDiagnostic: async () => {
    const { testType } = get();
    const hasPermission = await audioService.requestPermissions();
    if (!hasPermission) {
      set({ status: 'error' });
      return;
    }

    await mlService.loadModel(testType);

    set({ status: 'recording', result: null, duration: 0, sliceCount: 0 });

    const onSliceReady = async (uri: string) => {
      const { sliceCount, stopDiagnostic } = get();
      const nextSliceCount = sliceCount + 1;
      set({ sliceCount: nextSliceCount, duration: nextSliceCount * 7 });

      console.log(`Slice ${nextSliceCount} ready: ${uri}`);

      // Convert URI to PCM data and run inference
      const pcmData = await getPCMDataFromWav(uri);
      const inferenceResult = await mlService.runInference(pcmData);

      if (inferenceResult) {
        if (inferenceResult.hasIssue) {
          set({ result: inferenceResult });
          await stopDiagnostic();
        } else if (nextSliceCount >= 7) {
          set({ result: inferenceResult });
          await stopDiagnostic();
        }
      }
    };

    await audioService.startRecording(onSliceReady);
  },
}));
