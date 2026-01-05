import { useRouter } from 'expo-router';
import React from 'react';

import { Pressable, ScrollView, Text, View } from '@/components/ui';

export default function HowToUse() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white px-6 pt-16">
      <View className="mb-10 flex-row items-center">
        <Pressable onPress={() => router.back()} className="mr-4">
          {/* Simple Back Arrow using CaretDown rotated or similar */}
          <Text className="text-2xl">←</Text>
        </Pressable>
        <Text className="text-2xl font-bold uppercase">how to use</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <Step
          number="1"
          title="Start the Engine"
          description="Make sure your engine is running and stable."
        />
        <Step
          number="2"
          title="Record the Sound"
          description="Tap the Record button and hold your phone near the engine."
        />
        <Step
          number="3"
          title="Wait for Analysis"
          description="Sonaro analyzes the sound using AI. This takes a few seconds."
        />
        <Step
          number="4"
          title="View the Results"
          description="Detected issues will appear clearly on your screen."
        />
        <Step
          number="5"
          title="Tap for Instructions"
          description="Select any detected problem to see recommendations and next steps."
        />
      </ScrollView>
    </View>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <View className="mb-6">
      <Text className="mb-3 text-xl font-semibold text-[#FF6D00]">
        {number}. {title}
      </Text>
      <Text className="ml-6 text-base leading-6 text-[#666666]">
        {description}
      </Text>
    </View>
  );
}
