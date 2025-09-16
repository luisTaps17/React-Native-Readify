import { useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { useRouter } from "expo-router";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/signin"); 
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("./logo.png")} style={styles.logo} />
      <Text style={styles.appTitle}>Readify</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4EBD0",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  appTitle: {
  fontSize: 32,
  fontWeight: "800",
  letterSpacing: 1,
  color: "#333",
  fontFamily: "Playfair", // custom font
},
});
