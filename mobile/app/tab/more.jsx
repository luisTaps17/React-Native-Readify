import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const More = () => {
  const router = useRouter();

const menuItems = [
  {
    title: "General",
    icon: "settings-outline",
  },
  {
    title: "Appearance",
    icon: "color-palette-outline",
  },
  {
    title: "Downloads",
    icon: "download-outline",
  },
  {
    title: "Share",
    icon: "share-social-outline",
  },
  {
    title: "Help",
    icon: "help-circle-outline",
  },
  {
    title: "Discord Server",
    icon: "chatbubbles-outline",
  },
  {
    title: "About",
    icon: "information-circle-outline",
  },
];

  const handleExit = () => {
    router.replace("/");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../tab/img/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {menuItems.map((item) => (
        <TouchableOpacity key={item.title} style={styles.item}>
          <View style={styles.row}>
            <Ionicons name={item.icon} size={20} color="#333" />
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.exitItem} onPress={handleExit}>
        <Ionicons name="log-out-outline" size={20} color="#333" />
        <Text style={styles.exitText}>Exit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4EBD0",
  },
  logoContainer: {
    alignItems: "center",
    marginVertical: 20,
    marginTop: 100,
    marginBottom: 80,
  },
  logo: {
    width: 120,
    height: 100,
  },
  item: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    marginLeft: 12,
    fontSize: 18,
    color: "#333",
  },
  exitItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  exitText: {
    fontSize: 18,
    color: "#333",
    marginLeft: 12,
  },
});

export default More;
