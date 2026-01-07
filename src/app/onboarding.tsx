import { useRouter } from 'expo-router';
import React from 'react';

import { Pressable, Text, View } from '@/components/ui';
import { translate, useIsFirstTime } from '@/lib';

export default function Onboarding() {
  const [, setIsFirstTime] = useIsFirstTime();
  const router = useRouter();

  const handleStart = () => {
    setIsFirstTime(false);
    router.replace('/(app)/');
  };

  return (
    <View className="flex-1 justify-between bg-white px-6 py-16">
      <View className="items-center gap-6">
        <Text className="text-center text-3xl font-bold">
          {translate('onboarding.title')}
        </Text>

        {/* Illustration Placeholder */}
        <View className="aspect-square w-full items-center justify-center rounded-3xl bg-[#F5F5F5]">
          <Text className="text-9xl">🛡️</Text>
        </View>

        <View className="gap-4">
          <Benefit text={translate('onboarding.benefit_1')} />
          <Benefit text={translate('onboarding.benefit_2')} />
          <Benefit text={translate('onboarding.benefit_3')} />
        </View>
      </View>

      <Pressable
        className="h-14 w-full items-center justify-center rounded-full bg-[#FF6D00]"
        onPress={handleStart}
      >
        <Text className="text-lg font-bold text-white">
          {translate('common.get_started')}
        </Text>
      </Pressable>
    </View>
  );
}

function Benefit({ text }: { text: string }) {
  return (
    <View className="flex-row items-center gap-3">
      <Text className="text-xl text-[#FF6D00]">✓</Text>
      <Text className="text-lg text-gray-700">{text}</Text>
    </View>
  );
}
