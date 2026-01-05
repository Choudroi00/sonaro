import { Audio } from 'expo-av';

export type AudioSliceCallback = (uri: string) => Promise<void>;

class AudioService {
  private recording: Audio.Recording | null = null;
  private isRecording = false;
  private sliceTimeout: ReturnType<typeof setTimeout> | null = null;
  private onSliceReady: AudioSliceCallback | null = null;

  async requestPermissions() {
    const { status } = await Audio.requestPermissionsAsync();
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
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync({
        android: {
          extension: '.wav',
          outputFormat: Audio.AndroidOutputFormat.DEFAULT,
          audioEncoder: Audio.AndroidAudioEncoder.DEFAULT,
          sampleRate: 44100,
          numberOfChannels: 1,
          bitRate: 128000,
        },
        ios: {
          extension: '.wav',
          audioQuality: Audio.IOSAudioQuality.HIGH,
          sampleRate: 44100,
          numberOfChannels: 1,
          bitRate: 128000,
          linearPCMBitDepth: 16,
          linearPCMIsBigEndian: false,
          linearPCMIsFloat: false,
        },
        web: {},
      });
      this.recording = recording;

      this.sliceTimeout = setTimeout(async () => {
        await this.stopAndPrepareNextSlice();
      }, 7000);
    } catch (_err) {
      console.error('Failed to start recording', _err);
      this.stopRecording();
    }
  }

  private async stopAndPrepareNextSlice() {
    if (!this.recording) return;

    const recordingToStop = this.recording;
    this.recording = null;

    try {
      await recordingToStop.stopAndUnloadAsync();
      const uri = recordingToStop.getURI();
      if (uri && this.onSliceReady) {
        // Trigger the callback with the 7s slice URI
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

    if (this.recording) {
      try {
        await this.recording.stopAndUnloadAsync();
      } catch (_err) {
        // Ignore
      }
      this.recording = null;
    }
  }
}

export const audioService = new AudioService();
