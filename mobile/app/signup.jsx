import React from "react";
import { useRouter, Link } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function signup() {

  const router = useRouter();
  const handleLogin = () => {
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a new account</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
      />

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

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Already have an account?{" "}
        <TouchableOpacity>
        <Link href="/">
        <Text style={{color: "orange"}}>
          Login
        </Text>
        </Link>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4EBD0", padding: 20, justifyContent: "center" },
  title: { fontSize: 50, fontWeight: "bold", marginBottom: 50 },
  input: {
    borderBottomWidth: 1,
    borderColor: "#aaa",
    
    marginBottom: 60,
    paddingVertical: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#111",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 120,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  footer: { textAlign: "center", marginTop: 20, fontSize: 14 },
  link: { color: "blue", fontWeight: "600" },
});