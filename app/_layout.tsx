import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="details"
          options={{
            title: "Detail of user",
          }}
        />
        <Stack.Screen
          name="categories"
          options={{
            title: "Sub-categories",
          }}
        />
      </Stack>
    </>
  );
}
