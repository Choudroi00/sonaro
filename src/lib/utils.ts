import { Buffer } from 'buffer';
import * as FileSystem from 'expo-file-system';
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
    const base64 = await FileSystem.readAsStringAsync(uri, {
      encoding: 'base64',
    });
    const buffer = Buffer.from(base64, 'base64');

    // WAV header is 44 bytes.
    // We assume 16-bit PCM, Mono.
    const pcmData = buffer.subarray(44);
    const samples = new Int16Array(
      pcmData.buffer,
      pcmData.byteOffset,
      pcmData.length / 2
    );

    const floatSamples = new Float32Array(samples.length);
    for (let i = 0; i < samples.length; i++) {
      floatSamples[i] = samples[i] / 32768.0;
    }

    return floatSamples;
  } catch (err) {
    console.error('Failed to get PCM data from WAV', err);
    return new Float32Array(0);
  }
}
