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
  fileUri: string | null;
  setStatus: (status: DiagnosticStatus) => void;
  setResult: (result: any) => void;
  setDuration: (duration: number) => void;
  setTestType: (testType: TestType) => void;
  setFileUri: (uri: string | null) => void;
  reset: () => void;
  startDiagnostic: () => Promise<void>;
  runFileDiagnostic: () => Promise<void>;
  stopDiagnostic: () => Promise<void>;
}

async function processAudioSlice(
  uri: string,
  get: () => DiagnosticState,
  set: (partial: Partial<DiagnosticState>) => void
) {
  const { sliceCount, stopDiagnostic } = get();
  const nextSliceCount = sliceCount + 1;
  set({ sliceCount: nextSliceCount, duration: nextSliceCount * 7 });

  const pcmData = await getPCMDataFromWav(uri);
  const inferenceResult = await mlService.runInference(pcmData);

  if (inferenceResult) {
    if (inferenceResult.hasIssue || nextSliceCount >= 7) {
      set({ result: inferenceResult });
      await stopDiagnostic();
    }
  }
}

async function handleStartDiagnostic(
  get: () => DiagnosticState,
  set: (partial: Partial<DiagnosticState>) => void
) {
  const { testType } = get();
  const hasPermission = await audioService.requestPermissions();
  if (!hasPermission) {
    set({ status: 'error' });
    return;
  }

  await mlService.loadModel(testType);
  set({ status: 'recording', result: null, duration: 0, sliceCount: 0 });

  const onSliceReady = async (uri: string) => {
    await processAudioSlice(uri, get, set);
  };

  await audioService.startRecording(onSliceReady);
}

async function handleFileDiagnostic(
  get: () => DiagnosticState,
  set: (partial: Partial<DiagnosticState>) => void
) {
  const { testType, fileUri } = get();
  if (!fileUri) {
    set({ status: 'error' });
    return;
  }

  set({ status: 'analyzing', result: null, duration: 0, sliceCount: 0 });

  try {
    await mlService.loadModel(testType);
    const pcmData = await getPCMDataFromWav(fileUri);
    const inferenceResult = await mlService.runInference(pcmData);

    if (inferenceResult) {
      set({ result: inferenceResult, status: 'finished' });
    } else {
      set({ status: 'error' });
    }
  } catch (err) {
    console.error('File diagnostic failed', err);
    set({ status: 'error' });
  }
}

export const useDiagnosticStore = create<DiagnosticState>((set, get) => ({
  status: 'idle',
  result: null,
  duration: 0,
  sliceCount: 0,
  testType: 'braking',
  fileUri: null,

  setStatus: (status) => set({ status }),
  setResult: (result) => set({ result }),
  setDuration: (duration) => set({ duration }),
  setTestType: (testType) => set({ testType }),
  setFileUri: (uri) => set({ fileUri: uri }),

  reset: () =>
    set({
      status: 'idle',
      result: null,
      duration: 0,
      sliceCount: 0,
      fileUri: null,
    }),

  stopDiagnostic: async () => {
    await audioService.stopRecording();
    set({ status: 'finished' });
  },

  startDiagnostic: () => handleStartDiagnostic(get, set),
  runFileDiagnostic: () => handleFileDiagnostic(get, set),
}));
