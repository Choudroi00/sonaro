import { useRouter } from 'expo-router';
import React from 'react';

import { Pressable, Text, View } from '@/components/ui';
import { translate } from '@/lib';

export default function Welcome() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/onboarding');
  };

  return (
    <View className="size-full justify-between bg-white">
      <View className="items-center gap-4 px-6 pt-16">
        <Text className="text-3xl font-bold text-black">
          {translate('welcome.title')}
        </Text>
        <Text className="text-xl font-medium text-[#FF6D00]">
          {translate('welcome.subtitle')}
        </Text>

        {/* Car Illustration Placeholder */}
        <View className="aspect-square w-full items-center justify-center rounded-full bg-[#F5F5F5]">
          <Text className="text-9xl">🏎️</Text>
        </View>
      </View>

      <View className="gap-4 rounded-t-[40px] bg-[#0B3056] px-6 py-10">
        <Pressable
          className="h-14 w-full flex-row items-center justify-center gap-3 rounded-full bg-white"
          onPress={() => {}}
        >
          {/* Google Icon Placeholder */}
          <Text>G</Text>
          <Text className="text-base font-medium text-black">
            {translate('common.continue_google')}
          </Text>
        </Pressable>

        <Pressable
          className="h-14 w-full items-center justify-center rounded-full bg-[#FF6D00]"
          onPress={handleGetStarted}
        >
          <Text className="text-base font-medium text-white">
            {translate('common.continue_guest')}
          </Text>
        </Pressable>

        <View className="my-2 h-[2px] bg-white" />

        <Pressable
          className="h-14 w-full items-center justify-center rounded-full bg-black"
          onPress={() => router.push('/how-to-use')}
        >
          <Text className="text-base font-medium text-white">
            {translate('common.how_to_use')}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
