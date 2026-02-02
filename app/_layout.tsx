import { Stack } from 'expo-router';

import '../global.css';

const RootLayout = () => (
  <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />
  </Stack>
);

export default RootLayout;
