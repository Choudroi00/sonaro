import { useRouter } from 'expo-router';
import React from 'react';

import { Pressable, ScrollView, Text, View } from '@/components/ui';
import { useDiagnosticStore } from '@/store/use-diagnostic-store';

export default function MultipleIssues() {
  const router = useRouter();
  const reset = useDiagnosticStore((state) => state.reset);

  const issues = [
    { label: 'Belt noise', score: 60 },
    { label: 'Idle instability', score: 45 },
    { label: 'Valve clicking', score: 30 },
  ];

  const handleRecordAgain = () => {
    reset();
    router.replace('/(app)/');
  };

  return (
    <View className="flex-1">
      {/* Background Gradient equivalent - using a solid or simple bg for now */}
      <View className="flex-1 items-center bg-white px-5 pt-16">
        {/* Warning Icon Placeholder */}
        <View className="size-30 mb-4 items-center justify-center">
          <Text className="text-8xl">⚠️</Text>
        </View>

        <Text className="mb-1 text-2xl font-bold text-[#D50000]">
          Multiple issues found
        </Text>
        <Text className="mb-8 text-base text-[#C0CA33]">
          Select one to view instructions
        </Text>

        <ScrollView className="mb-10 w-full gap-4">
          {issues.map((issue, index) => (
            <Pressable
              key={index}
              className="mb-4 h-20 w-full flex-row items-center justify-between rounded-lg bg-[#FF6D00] px-5"
              onPress={() =>
                router.push({
                  pathname: '/(app)/result/issue-detail',
                  params: { title: issue.label },
                })
              }
            >
              <Text className="text-xl font-semibold text-white">
                {issue.label}
              </Text>

              {/* Score Circle Placeholder */}
              <View className="size-12 items-center justify-center rounded-full border-4 border-[#FDD835]">
                <Text className="text-xs font-bold text-white">
                  {issue.score}
                </Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>

        <Pressable
          className="mb-10 mt-auto h-14 w-full items-center justify-center rounded-lg bg-[#0B3056]"
          onPress={handleRecordAgain}
        >
          <Text className="text-base font-semibold text-white">
            Record Again
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
