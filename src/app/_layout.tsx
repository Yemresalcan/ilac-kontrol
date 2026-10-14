import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { colors, fontSize } from '@/theme';

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerTitleStyle: { fontSize: fontSize.body },
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'İlaç Kontrol' }} />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}
