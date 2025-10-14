import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const About = () => {
  const router = useRouter();

  const openLink = (url) => Linking.openURL(url);

  const infoItems = [
    { icon: "information-circle-outline", label: "Client version", value: "v1.0(01)" },
    { icon: "help-circle-outline", label: "Help" },
    { icon: "chatbubble-ellipses-outline", label: "Contact Us" },
    
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
            onPress={() => router.back()} 
            style={styles.backButton}
        >
          <Ionicons 
            name="chevron-back" 
            size={24} 
            color="#000" 
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About</Text>
        <View style={{ width: 24 }} /> {/* Spacer for alignment */}
      </View>

      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../tab/img/logo.png")} // adjust path based on where your logo is stored
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.appName}>Readify</Text>
        
      </View>

      {/* App info */}
      <View style={styles.section}>
        {infoItems.map((item, index) => (
          <InfoItem key={index} {...item} />
        ))}
      </View>

      {/* Credit Section */}
      <View style={styles.creditSection}>
        <Text style={styles.creditTitle}>Credit</Text>
        <Text style={styles.creditText}>
          This app is based on the following awesome projects:
        </Text>

        <Text
          style={styles.link}
          onPress={() => openLink("https://github.com/Suwayomi/Tachidesk-Server")}
        >
          Tachidesk-Server
        </Text>
        <Text
          style={styles.link}
          onPress={() => openLink("https://github.com/Suwayomi/Tachidesk-Sorayomi")}
        >
          Tachidesk-Sorayomi
        </Text>
        <Text
          style={styles.link}
          onPress={() =>
            openLink("https://github.com/tachiyomiorg/tachiyomi-extensions")
          }
        >
          Tachiyomi-Extensions
        </Text>
      </View>
    </ScrollView>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <TouchableOpacity style={styles.infoItem} activeOpacity={value ? 1 : 0.6}>
    <View style={styles.infoLeft}>
      <Ionicons name={icon} size={20} color="#000" style={styles.infoIcon} />
      <Text style={styles.infoLabel}>{label}</Text>
    </View>

    {value ? (
      <Text style={styles.infoValue}>{value}</Text>
    ) : (
      <Ionicons name="chevron-forward" size={20} color="#aaa" />
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4EBD0",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
    marginTop: 50,
  },
  backButton: {
    padding: 4,
    
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "600",
    fontWeight: "bold",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  
  },
  section: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },
  appName: {
    fontSize: 30,
    fontWeight: "bold",

  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  infoLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoIcon: {
    marginRight: 10,
  },
  infoLabel: {
    fontSize: 16,
  },
  infoValue: {
    color: "#666",
    fontSize: 15,
  },
  creditSection: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  creditTitle: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 6,
  },
  creditText: {
    fontSize: 15,
    color: "#333",
    marginBottom: 6,
  },
  link: {
    color: "#007AFF",
    fontSize: 15,
    marginBottom: 4,
  },
});

export default About;
