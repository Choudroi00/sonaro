import { getDocumentAsync } from 'expo-document-picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';

import { Pressable, Text, View } from '@/components/ui';
import { translate } from '@/lib';
import { useDiagnosticStore } from '@/store/use-diagnostic-store';

function FilePickerArea({
  selectedFile,
  onPick,
}: {
  selectedFile: { name: string; uri: string } | null;
  onPick: () => void;
}) {
  return (
    <View className="flex-1 items-center justify-center gap-6">
      <Pressable
        className="size-48 items-center justify-center rounded-full border-2 border-dashed border-white/30 bg-white/5"
        onPress={onPick}
      >
        <Text className="text-4xl text-white/60">🎵</Text>
        <Text className="mt-2 text-sm text-white/40">
          {translate('file_chooser.pick_file')}
        </Text>
      </Pressable>

      {selectedFile && (
        <Text className="max-w-xs text-center text-sm text-[#80DEEA]">
          {selectedFile.name}
        </Text>
      )}
    </View>
  );
}

export default function FileChooser() {
  const router = useRouter();
  const setFileUri = useDiagnosticStore((s) => s.setFileUri);

  const [selectedFile, setSelectedFile] = useState<{
    name: string;
    uri: string;
  } | null>(null);

  const handlePickFile = async () => {
    try {
      const result = await getDocumentAsync({
        type: 'audio/*',
        copyToCacheDirectory: true,
        multiple: false,
      });

      if (!result.canceled && result.assets?.length) {
        const asset = result.assets[0];
        setSelectedFile({ name: asset.name, uri: asset.uri });
      }
    } catch (err) {
      console.error('File picker error', err);
    }
  };

  const handleContinue = () => {
    if (!selectedFile) return;
    setFileUri(selectedFile.uri);
    router.push('/(app)/test-selection?mode=file');
  };

  return (
    <View className="flex-1 bg-[#0B3056] px-6 py-16">
      <Text className="mb-8 text-2xl font-bold text-white">
        {translate('file_chooser.title')}
      </Text>

      <FilePickerArea selectedFile={selectedFile} onPick={handlePickFile} />

      <Pressable
        className={`h-14 items-center justify-center rounded-full ${
          selectedFile ? 'bg-[#FF6D00] active:bg-[#E65100]' : 'bg-white/10'
        }`}
        onPress={selectedFile ? handleContinue : undefined}
        disabled={!selectedFile}
      >
        <Text
          className={`text-lg font-bold ${
            selectedFile ? 'text-white' : 'text-white/30'
          }`}
        >
          {translate('common.next')}
        </Text>
      </Pressable>

      <Pressable
        className="mt-4 items-center py-4"
        onPress={() => router.back()}
      >
        <Text className="text-white/60">{translate('common.back')}</Text>
      </Pressable>
    </View>
  );
}
