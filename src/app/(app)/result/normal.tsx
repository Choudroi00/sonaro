import { useRouter } from 'expo-router';
import React from 'react';

import { Pressable, Text, View } from '@/components/ui';
import { translate } from '@/lib';
import { useDiagnosticStore } from '@/store/use-diagnostic-store';

export default function NormalResult() {
  const router = useRouter();
  const reset = useDiagnosticStore((state) => state.reset);

  const handleBack = () => {
    reset();
    router.replace('/(app)/');
  };

  return (
    <View className="flex-1 items-center justify-between bg-[#1E5185] px-6 py-16">
      <View className="w-full flex-1 items-center justify-center gap-8">
        {/* Car Illustration Placeholder */}
        <View className="h-48 w-64 items-center justify-center">
          <Text className="text-6xl text-white">🚗</Text>
        </View>

        <Text className="font-audiowide text-2xl font-bold text-white">
          {translate('home.engine_status')}
        </Text>

        <View className="h-12 w-48 items-center justify-center rounded-lg bg-[#006400]">
          <Text className="text-lg font-semibold text-white">
            {translate('home.normal')}
          </Text>
        </View>

        <Text className="px-4 text-center text-base text-[#CDDC39]">
          {translate('home.normal_desc')}
        </Text>
      </View>

      <Pressable
        className="h-14 w-full items-center justify-center rounded-full bg-[#FF6D00]"
        onPress={handleBack}
      >
        <Text className="text-lg font-bold text-white">
          {translate('common.back_home')}
        </Text>
      </Pressable>
    </View>
  );
}
