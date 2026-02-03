import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import '../global.css';

const RootLayout = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  </GestureHandlerRootView>
);

export default RootLayout;
