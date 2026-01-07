import {
  AudioModule,
  AudioQuality,
  AudioRecorder,
  IOSOutputFormat,
} from 'expo-audio';

export type AudioSliceCallback = (uri: string) => Promise<void>;

class AudioService {
  private recorder: any = null;
  private isRecording = false;
  private sliceTimeout: ReturnType<typeof setTimeout> | null = null;
  private onSliceReady: AudioSliceCallback | null = null;

  async requestPermissions() {
    const { status } = await AudioModule.requestRecordingPermissionsAsync();
    return status === 'granted';
  }

  async startRecording(onSliceReady: AudioSliceCallback) {
    if (this.isRecording) return;

    this.onSliceReady = onSliceReady;
    this.isRecording = true;
    await this.recordNextSlice();
  }

  private async recordNextSlice() {
    if (!this.isRecording) return;

    try {
      await AudioModule.setAudioModeAsync({
        allowsRecording: true,
        playsInSilentMode: true,
      });

      const options = {
        extension: '.wav',
        sampleRate: 16000,
        numberOfChannels: 1,
        bitRate: 128000,
        android: {
          extension: '.wav',
          outputFormat: 'default' as const,
          audioEncoder: 'default' as const,
        },
        ios: {
          extension: '.wav',
          outputFormat: IOSOutputFormat.LINEARPCM,
          audioQuality: AudioQuality.HIGH,
          linearPCMBitDepth: 16,
          linearPCMIsBigEndian: false,
          linearPCMIsFloat: false,
        },
      };

      this.recorder = new AudioRecorder(options);
      await this.recorder.prepareToRecordAsync();
      this.recorder.record();

      this.sliceTimeout = setTimeout(async () => {
        await this.stopAndPrepareNextSlice();
      }, 7000);
    } catch (_err) {
      console.error('Failed to start recording', _err);
      this.stopRecording();
    }
  }

  private async stopAndPrepareNextSlice() {
    if (!this.recorder) return;

    const recorderToStop = this.recorder;
    this.recorder = null;

    try {
      await recorderToStop.stop();
      const uri = recorderToStop.uri;
      if (uri && this.onSliceReady) {
        this.onSliceReady(uri);
      }

      // Start the next slice if still recording
      if (this.isRecording) {
        await this.recordNextSlice();
      }
    } catch (_err) {
      console.error('Failed to stop recording slice', _err);
    }
  }

  async stopRecording() {
    this.isRecording = false;
    if (this.sliceTimeout) {
      clearTimeout(this.sliceTimeout);
      this.sliceTimeout = null;
    }

    if (this.recorder) {
      try {
        await this.recorder.stop();
      } catch (_err) {
        // Ignore
      }
      this.recorder = null;
    }
  }
}

export const audioService = new AudioService();
