import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="categories"
          options={{
            title: "Sub-categories",
          }}
        />
        <Stack.Screen
          name="bhajans"
          options={{
            title: "Bhajans",
          }}
        />
      </Stack>
    </>
  );
}
