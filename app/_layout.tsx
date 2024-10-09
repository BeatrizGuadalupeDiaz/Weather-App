import { Stack } from "expo-router";
import React from "react";
import { store } from "../utils/app/store";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="counter"
          options={{
            title: "Counter",
          }}
        />
      </Stack>
    </Provider>
  );
}
