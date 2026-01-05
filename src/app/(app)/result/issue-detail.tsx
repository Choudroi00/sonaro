import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';

import { Pressable, Text, View } from '@/components/ui';

export default function IssueDetail() {
  const router = useRouter();
  const { title } = useLocalSearchParams();

  return (
    <View className="flex-1 items-center justify-center gap-10 bg-white px-5">
      <View className="w-full items-center gap-10">
        {/* Brake/Issue Illustration Placeholder */}
        <View className="aspect-[4/3] w-full items-center justify-center rounded-3xl bg-orange-100">
          <Text className="text-9xl">⚙️</Text>
        </View>

        <Text className="text-center text-3xl font-bold text-[#FF6D00]">
          {title || 'Worn Brake Pads'}
        </Text>

        {/* Loading Spinner Placeholder as per Spec Page 9 */}
        <View className="size-30 items-center justify-center">
          {/* Spinner Rings */}
          <View className="size-30 absolute rounded-full border-[12px] border-[#FFEBEE]" />
          <View className="size-30 absolute rounded-full border-[12px] border-[#FF6D00] border-t-transparent" />
        </View>
      </View>

      <Pressable className="mt-10" onPress={() => router.back()}>
        <Text className="text-lg font-bold text-[#0B3056]">
          ← Back to Issues
        </Text>
      </Pressable>
    </View>
  );
}
