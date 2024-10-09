import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios'

const WEATHER_API_KEY = '535063458f204933806161527242708'
const WEATHER_API_BASE_URL = 'http://api.weatherapi.com/v1/forecast.json?'
const CITY = 'Tuxtla Guiterrez, Chiapas'
const DAYS = '3'
const AQI = 'no'
const ALERTS = 'no'
const WEATHER_API_URL = `${WEATHER_API_BASE_URL}&key=${WEATHER_API_KEY}&q=${CITY}&days=${DAYS}&aqi=${AQI}&alerts=${ALERTS}`


const weatherScreen = () => {
  const [weather, setWeather] = React.useState('')
  React.useEffect(() => {
    axios.get(WEATHER_API_URL)
    .then(response => {
      console.log(response.data);
      setWeather(response.data)
    }).catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <View>
      <Text>CLIMA</Text>
      <Text>{weather.current?.temp_c}</Text>
    </View>
  )
}

export default weatherScreen