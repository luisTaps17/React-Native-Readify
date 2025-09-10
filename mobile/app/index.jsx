import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const index = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        value={email}
        onChangeText={setEmail}
      />

      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot password?</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
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
        <Image source={require("../app/logos_facebook.png")} style={styles.icon} />
        <Image source={require("../app/Vector.png")} style={styles.icon} />
        <Image source={require("../app/grommet-icons_google.png")} style={styles.icon} />
      </View>
    </View>
  );
};

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

export default index;
