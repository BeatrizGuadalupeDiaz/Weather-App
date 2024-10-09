// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Weather } from "../../types/weather";

const WEATHER_API_KEY = "535063458f204933806161527242708";
//base url siempre en https
const WEATHER_API_BASE_URL = "https://api.weatherapi.com/v1/forecast.json?";
const DAYS = "1";
const AQI = "no";
const ALERTS = "no";
// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: WEATHER_API_BASE_URL }),
  endpoints: (builder) => ({
    getDataWeather: builder.query<Weather, string>({
      query: (city) =>
        `&key=${WEATHER_API_KEY}&q=${city}&days=${DAYS}&aqi=${AQI}&alerts=${ALERTS}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDataWeatherQuery } = weatherApi;
