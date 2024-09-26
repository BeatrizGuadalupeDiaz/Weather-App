import { Link, router } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

export default function HomeScreen() {
    const id = '12345';
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link href="/details">Ir a settings</Link>
      <Pressable onPress={()=> router.navigate('./other')}>
        <Text>Pressable</Text>
      </Pressable>
      <Link
        href={{
          pathname: '/user/[id]',
          params: { id: 'bacon' },
        }}>
        View user details
      </Link>
    <Pressable onPress={() => router.navigate(`/user/${id}`)}>
      <Text>Pressable user</Text>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
