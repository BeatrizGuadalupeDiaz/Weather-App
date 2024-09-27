import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen() {
  const router = useRouter();
  //update the title of header
  const params : {name:string} = useLocalSearchParams();
  params.name = params.name || "User Name"

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: params.name,
        }}
      />
      <Text style={{fontSize:20}} onPress={()=> {
        router.setParams({name: 'Updated!'});
      }}>Updated the title</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
