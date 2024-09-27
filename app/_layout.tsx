import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="details" />
      <Stack.Screen
        name="user/[id]"
        getId={
          ({ params }) => String(Date.now())
        }
      />
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    </Stack>
  );
}
