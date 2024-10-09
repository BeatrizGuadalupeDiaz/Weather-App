import { Link, router, Stack } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";

//componente de imagen
function LogoTitle() {
  return (
    <>
    <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
    <Text>Home</Text>
    </>
  );
}

export default function HomeScreen() {
    const id = '12345';

  return (
    <View style={styles.container}>
      {/* <Stack.Screen
        options={{
          title: 'My home',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',

          },
         headerTitle: () => <LogoTitle />,
         headerRight: () => <Pressable onPress={() => router.navigate('/user/[id]')}><Text>User</Text></Pressable>
        }}
      />

      <Text>Home</Text>
      <Link href="/details">Ir a details con Link</Link>
      <Pressable onPress={()=> router.navigate('./other')}>
        <Text>ir a Other con btn-navigation</Text>
      </Pressable>
      <Link
        href={{
          pathname: '/user/[id]',
          params: { id: 'bacon' },
        }}>
        View user details - params whith Link
      </Link>
    <Pressable onPress={() => router.navigate(`/user/${id}`)}>
      <Text>Pressable user - params with navigate</Text>
    </Pressable> */}
    <Link href="/(tabs)" style={styles.text}>Go to Whater</Link>
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
});
