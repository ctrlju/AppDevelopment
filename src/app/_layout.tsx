import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Hello :)", headerShown: false }} />
      <Stack.Screen name="login/index" options={{ title: "Login", headerShown: false }} />
    </Stack>
  );
}
