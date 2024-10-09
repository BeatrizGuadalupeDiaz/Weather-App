import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { useGetDataWeatherQuery } from "../../utils/services/weather";

const userScreen = () => {
  const router = useRouter();
  const [user, setUser] = React.useState("Usuario");
  const { data } = useGetDataWeatherQuery("Tuxtla Gutierrez, Chiapas");
  return (
    <View>
      <Text>userScreen {user}</Text>
      <Text>City: {data.location.country}</Text>
      <Text>Country: {data.location.name}</Text>
      <Button title="Go to Home" onPress={() => router.dismissAll()} />
    </View>
  );
};

export default userScreen;
