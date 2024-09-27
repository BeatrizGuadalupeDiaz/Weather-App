import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Link, useLocalSearchParams, useNavigation } from 'expo-router'

const User = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // config header
    navigation.setOptions({
      headerShown: true,
      title: 'User',
    }); 
  },[navigation]) 

  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text> User {id}</Text>
      <Link href="/other">Other</Link>
    </View>
  )
}

export default User