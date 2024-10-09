import { View, Text, Alert, ActivityIndicator } from "react-native";
import React from "react";
import { useGetDataWeatherQuery } from "../../utils/services/weather";

const weatherScreen = () => {
  const { data, error, isLoading } = useGetDataWeatherQuery(
    "Tuxtla Gutierrez, Chiapas"
  );

  if (error) {
    <View>
      <Text>Error</Text>
    </View>;
  }

  if (isLoading) {
    return (
      <View>
        <Text>Cargando...</Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View>
      <Text>CLIMA</Text>
      <Text>{data ? data.current.temp_c : "0"}</Text>
    </View>
  );
};

export default weatherScreen;
