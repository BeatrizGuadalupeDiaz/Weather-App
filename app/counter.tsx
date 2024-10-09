import React from "react";
import type { RootState } from "../utils/app/store";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../utils/features/slices/CounterSlice";
import { Pressable, Text, View } from "react-native";

export default function CounterScreen() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Selecciona el nivel de satisfaccion de la app</Text>
      <Pressable onPress={() => dispatch(increment())}>
        <View>
          <Text>Increment</Text>
        </View>
      </Pressable>
      <Text>{count}</Text>
      <Pressable onPress={() => dispatch(decrement())}>
        <View>
          <Text>Decrement</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => dispatch(incrementByAmount(5))}>
        <View>
          <Text>other option</Text>
        </View>
      </Pressable>
    </View>
  );
}
