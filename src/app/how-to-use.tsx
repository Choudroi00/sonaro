import { useRouter } from 'expo-router';
import React from 'react';

import { Pressable, ScrollView, Text, View } from '@/components/ui';
import { ArrowRight } from '@/components/ui/icons';
import { translate } from '@/lib';

export default function HowToUse() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white px-6 pt-16">
      <View className="mb-10 flex-row items-center">
        <Pressable onPress={() => router.back()} className="me-4">
          <View style={{ transform: [{ rotate: '180deg' }] }}>
            <ArrowRight color="black" width={20} height={20} />
          </View>
        </Pressable>
        <Text className="text-2xl font-bold uppercase">
          {translate('how_to_use.title')}
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <Step
          number="1"
          title={translate('how_to_use.step_1_title')}
          description={translate('how_to_use.step_1_desc')}
        />
        <Step
          number="2"
          title={translate('how_to_use.step_2_title')}
          description={translate('how_to_use.step_2_desc')}
        />
        <Step
          number="3"
          title={translate('how_to_use.step_3_title')}
          description={translate('how_to_use.step_3_desc')}
        />
        <Step
          number="4"
          title={translate('how_to_use.step_4_title')}
          description={translate('how_to_use.step_4_desc')}
        />
        <Step
          number="5"
          title={translate('how_to_use.step_5_title')}
          description={translate('how_to_use.step_5_desc')}
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
      <Text className="ms-6 text-base leading-6 text-[#666666]">
        {description}
      </Text>
    </View>
  );
}
