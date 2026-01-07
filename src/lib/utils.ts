import { Buffer } from 'buffer';
import { File } from 'expo-file-system';
import { Linking } from 'react-native';
import type { StoreApi, UseBoundStore } from 'zustand';

export function openLinkInBrowser(url: string) {
  Linking.canOpenURL(url).then((canOpen) => canOpen && Linking.openURL(url));
}

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  let store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (let k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

export async function getPCMDataFromWav(uri: string): Promise<Float32Array> {
  try {
    const file = new File(uri);
    if (!file.exists) {
      console.error('WAV file does not exist', { uri });
      return new Float32Array(0);
    }

    const bytes = await file.bytes();
    const buffer = Buffer.from(
      bytes.buffer,
      bytes.byteOffset,
      bytes.byteLength
    );

    if (buffer.length < 44) {
      console.error(`WAV file too small: ${buffer.length} bytes`, { uri });
      return new Float32Array(0);
    }

    // WAV header is 44 bytes.
    // We assume 16-bit PCM, Mono.
    // Use subarray and copy to a new Uint8Array to ensure a new aligned ArrayBuffer
    const pcmDataRaw = buffer.subarray(44);
    const pcmData = new Uint8Array(pcmDataRaw);
    const samples = new Int16Array(
      pcmData.buffer,
      0,
      Math.floor(pcmData.byteLength / 2)
    );

    const floatSamples = new Float32Array(samples.length);
    for (let i = 0; i < samples.length; i++) {
      floatSamples[i] = samples[i] / 32768.0;
    }

    return floatSamples;
  } catch (err) {
    console.error('Failed to get PCM data from WAV', err, { uri });
    return new Float32Array(0);
  }
}
