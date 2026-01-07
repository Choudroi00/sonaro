import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';

import { Text, View } from '@/components/ui';
import { translate, useIsFirstTime } from '@/lib';

export default function Splash() {
  const router = useRouter();
  const [isFirstTime] = useIsFirstTime();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isFirstTime) {
        router.replace('/welcome');
      } else {
        router.replace('/(app)/');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [isFirstTime, router]);

  return (
    <View className="size-full flex-1 items-center justify-between bg-white py-20">
      <View className="h-72 w-full bg-[#E0F7FA] opacity-50" />

      <View className="items-center gap-4">
        {/* Logo Placeholder */}
        <View className="size-32 items-center justify-center rounded-full bg-[#0B3056]">
          <Text className="text-4xl text-[#FF6D00]">⚙️</Text>
        </View>
        <Text className="text-5xl text-white">SONARO</Text>
        <Text className="text-lg font-bold text-[#0B3056]">
          {translate('welcome.tagline')}
        </Text>
      </View>

      <View className="h-48 w-full bg-[#E0F7FA] opacity-50" />
    </View>
  );
}
