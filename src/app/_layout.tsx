import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Hello :)", headerShown: false }} />
      <Stack.Screen name="tooltipOne/index" options={{ title: "#1 Tooltip", headerShown: false }} />
      <Stack.Screen name="bottomSheet/index" options={{ title: "Bottom Sheet", headerShown: false }} />
    </Stack>
  );
}
