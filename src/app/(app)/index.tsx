import { useRouter } from 'expo-router';
import React from 'react';

import { Pressable, Text, View } from '@/components/ui';
import { CaretDown, Gallery, Menu, Record } from '@/components/ui/icons';
import { useDiagnosticStore } from '@/store/use-diagnostic-store';

export default function Home() {
  const router = useRouter();
  const startDiagnostic = useDiagnosticStore((state) => state.startDiagnostic);

  const handleRecordPress = async () => {
    await startDiagnostic();
    router.push('/(app)/analyzing');
  };

  return (
    <View className="flex-1 justify-between bg-[#0B3056] px-6 py-16">
      {/* Language Selector */}
      <Pressable className="flex-row items-center gap-2">
        <Text className="text-lg text-white">En</Text>
        <CaretDown color="white" />
      </Pressable>

      {/* Main Content (Empty for now as per Page 7 spec which focuses on bottom controls) */}
      <View className="flex-1" />

      {/* Bottom Controls */}
      <View className="flex-row items-center justify-between px-4">
        <Pressable
          className="size-20 items-center justify-center rounded-3xl bg-white"
          onPress={() => {}}
        >
          <Gallery color="#0B3056" />
        </Pressable>

        <Pressable
          className="-mt-5 size-24 items-center justify-center rounded-full bg-white"
          onPress={handleRecordPress}
        >
          <Record color="#FF6D00" />
        </Pressable>

        <Pressable
          className="size-20 items-center justify-center rounded-3xl bg-white"
          onPress={() => router.push('/settings')}
        >
          <Menu color="#0B3056" />
        </Pressable>
      </View>
    </View>
  );
}
