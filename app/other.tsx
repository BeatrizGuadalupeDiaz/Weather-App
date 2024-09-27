import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const other = () => {
  const router = useRouter();

  const handleDismiss = (count: number) => {
    if (router.canDismiss()) {
      router.dismiss(count)
    }
  };

  return (
    <View>
      <Text>other</Text>
      <Button title="Go to Home" onPress={() => router.dismiss(4)} />
      <Button title="Go to Home- All" onPress={() => router.dismissAll()} />
      <Button title="Maybe dismiss" onPress={() => handleDismiss(5)} />
    </View>
  )
}

export default other