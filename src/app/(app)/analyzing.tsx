import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';

import { Text, View } from '@/components/ui';
import { translate } from '@/lib';
import { useDiagnosticStore } from '@/store/use-diagnostic-store';

export default function Analyzing() {
  const router = useRouter();
  const { status, result } = useDiagnosticStore();

  useEffect(() => {
    if (status === 'finished') {
      if (result?.hasIssue) {
        router.replace('/(app)/result/attention');
      } else {
        router.replace('/(app)/result/normal');
      }
    } else if (status === 'error') {
      router.back();
    }
  }, [status, result, router]);

  return (
    <View className="flex-1 items-center justify-center gap-10 bg-[#0B3056] px-6">
      {/* Gears Illustration Placeholder */}
      <View className="h-44 w-48 items-center justify-center">
        {/* You can replace this with a real image later */}
        <Text className="text-white">⚙️⚙️</Text>
      </View>

      <View className="items-center gap-3">
        <Text className="text-center text-2xl text-white">
          {translate('home.analyzing')}
        </Text>
        <Text className="text-center text-lg text-[#80DEEA]">
          {translate('home.analyzing_desc')}
        </Text>
      </View>

      {/* Audio Visualizer Placeholder */}
      <View className="h-20 w-48 flex-row items-center justify-center gap-2">
        {[...Array(10)].map((_, i) => (
          <View
            key={i}
            className="w-1 rounded-full bg-white"
            style={{ height: Math.random() * 40 + 10 }}
          />
        ))}
      </View>
    </View>
  );
}
