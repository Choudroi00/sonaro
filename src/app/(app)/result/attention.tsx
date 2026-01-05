import { useRouter } from 'expo-router';
import React from 'react';

import { Pressable, Text, View } from '@/components/ui';

export default function AttentionResult() {
  const router = useRouter();

  const handleAction = () => {
    router.push('/(app)/result/issues');
  };

  return (
    <View className="flex-1 items-center justify-center gap-8 bg-[#FF0000] px-6">
      {/* Sick Car Illustration Placeholder */}
      <View className="h-64 w-full items-center justify-center">
        <Text className="text-9xl text-white">🤮🚗</Text>
      </View>

      <Text className="text-center text-3xl text-white">Engine Status</Text>

      <Pressable
        className="h-14 w-full items-center justify-center rounded-lg bg-[#FF6D00]"
        onPress={handleAction}
      >
        <Text className="text-xl text-white">Attention Required</Text>
      </Pressable>
    </View>
  );
}
