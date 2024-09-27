import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams, useRouter } from 'expo-router';

const userScreen = () => {
    const { user } = useLocalSearchParams();
    const router = useRouter();
  return (
    <View>
      <Text>userScreen {user}</Text>
        <Link href="/moreInfo">More Info</Link>
        <Button title="Go to Home" onPress={() => router.dismissAll()} />
    </View>
  )
}

export default userScreen