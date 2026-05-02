import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { Text, View } from '@/components/ui';
import { translate } from '@/lib';
import type { TestType } from '@/lib/ml/service';
import { useDiagnosticStore } from '@/store/use-diagnostic-store';

const BAR_COUNT = 24;

function VisualizerBar({ index }: { index: number }) {
  const height = useSharedValue(8);

  useEffect(() => {
    const minHeight = 6;
    const maxHeight = 56;
    const randomPeak = Math.random() * (maxHeight - minHeight) + minHeight;
    const duration = 240 + Math.random() * 320;

    height.value = withRepeat(
      withSequence(
        withTiming(randomPeak, {
          duration,
          easing: Easing.inOut(Easing.quad),
        }),
        withTiming(minHeight + Math.random() * 12, {
          duration: duration * 0.56,
          easing: Easing.inOut(Easing.quad),
        })
      ),
      -1,
      false
    );
  }, [height]);

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
  }));

  return (
    <View
      className="w-1.5 items-center justify-end overflow-hidden rounded-full"
      style={{ height: 56 }}
    >
      <View
        className="w-full rounded-full bg-white/80"
        style={{
          backgroundColor:
            index % 3 === 0
              ? '#FF6D00'
              : index % 3 === 1
                ? '#80DEEA'
                : 'rgba(255,255,255,0.6)',
        }}
      >
        <View style={animatedStyle} />
      </View>
    </View>
  );
}

export default function Analyzing() {
  const router = useRouter();
  const { status, result, testType } = useDiagnosticStore();

  const TEST_TYPE_LABELS: Record<TestType, string> = {
    braking: translate('tests.braking'),
    idle: translate('tests.idle'),
    startup: translate('tests.startup'),
  };

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
      <View className="h-44 w-48 items-center justify-center">
        <Text className="text-white">⚙️⚙️</Text>
      </View>

      <View className="items-center gap-3">
        <Text className="text-center text-2xl text-white">
          {translate('home.analyzing')}
        </Text>
        <Text className="text-center text-lg text-[#80DEEA]">
          {translate('home.analyzing_desc')}
        </Text>
        <View className="mt-1 rounded-full bg-white/10 px-4 py-1.5">
          <Text className="text-sm font-semibold text-[#FF6D00]">
            {TEST_TYPE_LABELS[testType]}
          </Text>
        </View>
      </View>

      <View className="h-20 w-72 flex-row items-center justify-center gap-1.5">
        {Array.from({ length: BAR_COUNT }).map((_, i) => (
          <VisualizerBar key={i} index={i} />
        ))}
      </View>
    </View>
  );
}
