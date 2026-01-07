import { useRouter } from 'expo-router';
import React from 'react';

import { Pressable, Text, View } from '@/components/ui';
import { translate } from '@/lib';
import type { TestType } from '@/lib/ml/service';
import { useDiagnosticStore } from '@/store/use-diagnostic-store';

const TESTS: { type: TestType; title: string; desc: string }[] = [
  {
    type: 'braking',
    title: 'tests.braking',
    desc: 'tests.braking_desc',
  },
  {
    type: 'idle',
    title: 'tests.idle',
    desc: 'tests.idle_desc',
  },
  {
    type: 'startup',
    title: 'tests.startup',
    desc: 'tests.startup_desc',
  },
];

export default function TestSelection() {
  const router = useRouter();
  const setTestType = useDiagnosticStore((state) => state.setTestType);
  const startDiagnostic = useDiagnosticStore((state) => state.startDiagnostic);

  const handleSelect = async (type: TestType) => {
    setTestType(type);
    await startDiagnostic();
    router.push('/(app)/analyzing');
  };

  return (
    <View className="flex-1 bg-[#0B3056] px-6 py-16">
      <Text className="mb-8 text-2xl font-bold text-white">
        {translate('tests.title')}
      </Text>

      <View className="gap-4">
        {TESTS.map((test) => (
          <Pressable
            key={test.type}
            onPress={() => handleSelect(test.type)}
            className="rounded-2xl bg-white/10 p-4 active:bg-white/20"
          >
            <Text className="text-xl font-semibold text-white">
              {translate(test.title as any)}
            </Text>
            <Text className="mt-1 text-white/60">
              {translate(test.desc as any)}
            </Text>
          </Pressable>
        ))}
      </View>

      <Pressable
        className="mt-auto items-center py-4"
        onPress={() => router.back()}
      >
        <Text className="text-white/60">{translate('common.back')}</Text>
      </Pressable>
    </View>
  );
}
