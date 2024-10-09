import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../utils/app/store";

export default function HomeScreen() {
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Puntuaje de la app</Text>
      <Text style={[styles.text, styles.textRaiting]}>{count}</Text>
      <Link href="/(tabs)" style={styles.text}>
        Go to Whater
      </Link>
      <Link href="/counter" style={styles.text}>
        Go to Raiting
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 20,
  },
  textRaiting: {
    marginBottom: 20,
  },
});
