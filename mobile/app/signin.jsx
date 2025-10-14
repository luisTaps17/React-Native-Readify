import React from "react";
import { useRouter, Link } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function signin() {

  const router = useRouter();
  const handleLogin = () => {
    router.replace("/tab/library");
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.logoContainer}>
        <Image source={require("../app/logo.png")} style={styles.logo} />
      </View>

      
      <Text style={styles.title}>Sign in</Text>

      
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />

      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />

      
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot password?</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      
      <Text style={styles.footer}>
        Don’t have an account?{" "}
        <Link href="/signup">
        <Text style={{color: "orange"}}>
          Sign up
        </Text>
        </Link>
      </Text>
      

      
      <View style={styles.divider} />
      <Text style={styles.signInWith}>Sign In with</Text>

      
      <View style={styles.socialContainer}>
        <Image source={require("../app/facebook.png")} style={styles.icon} />
        <Image source={require("../app/linkedin.png")} style={styles.icon} />
        <Image source={require("../app/google.png")} style={styles.icon} />
      </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4EBD0", padding: 20 },
  logoContainer: { alignItems: "center", marginTop: 40 },
  logo: { width: 80, height: 80, resizeMode: "contain" },
  title: { fontSize: 50, fontWeight: "bold", marginTop: 35 },
  input: {
    borderBottomWidth: 1,
    borderColor: "#aaa",
    marginTop: 60,
    paddingVertical: 8,
    fontSize: 16,
  },
  forgot: { color: "orange", textAlign: "right", marginTop: 10 },
  button: {
    backgroundColor: "#111",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 50,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  footer: { textAlign: "center", marginTop: 20, fontSize: 14 },
  link: { color: "blue", fontWeight: "600" },
  divider: { borderBottomWidth: 1, borderColor: "#aaa", marginVertical: 20 },
  signInWith: { textAlign: "center", fontSize: 14, marginBottom: 10 },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  icon: { width: 40, height: 40, marginHorizontal: 10, resizeMode: "contain" },
});