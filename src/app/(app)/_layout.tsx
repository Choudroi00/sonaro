import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="test-selection" />
      <Stack.Screen name="analyzing" />
      <Stack.Screen name="result" />
    </Stack>
  );
}
