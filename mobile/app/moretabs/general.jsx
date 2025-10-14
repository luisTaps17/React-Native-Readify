import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const General = () => {
  const router = useRouter();

  // State for toggles (so they stay when clicked)
  const [autoUpdate, setAutoUpdate] = useState(true);
  const [notifLibrary, setNotifLibrary] = useState(true);
  const [notifChapter, setNotifChapter] = useState(false);
  const [notifApp, setNotifApp] = useState(false);
  const [autoBookmark, setAutoBookmark] = useState(true);
  const [doubleTapZoom, setDoubleTapZoom] = useState(true);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>

        {/* Centered Logo + Title */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../tab/img/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          
        </View>

        <View style={{ width: 24 }} /> {/* Spacer for balance */}
      </View>

      {/* Title */}
      <Text style={styles.headerTitle}>General</Text>

      {/* Library & Data */}
      <Text style={styles.sectionTitle}>Library & Data</Text>
      <View style={styles.section}>
        <SettingItem label="Library Update Frequency" value="Every 12 hours" />
        <SettingSwitch
          label="Auto Update Library"
          value={autoUpdate}
          onValueChange={setAutoUpdate}
        />
        <SettingItem label="Clear Cache" />
      </View>

      {/* Notifications */}
      <Text style={styles.sectionTitle}>Notifications</Text>
      <View style={styles.section}>
        <SettingSwitch
          label="Library Updates Notifications"
          value={notifLibrary}
          onValueChange={setNotifLibrary}
        />
        <SettingSwitch
          label="New Chapter Notifications"
          value={notifChapter}
          onValueChange={setNotifChapter}
        />
        <SettingSwitch
          label="App Announcements"
          value={notifApp}
          onValueChange={setNotifApp}
        />
      </View>

      {/* Content & Region */}
      <Text style={styles.sectionTitle}>Content & Region</Text>
      <View style={styles.section}>
        <SettingItem label="Preferred Language" value="English" />
      </View>

      {/* Reading Behavior */}
      <Text style={styles.sectionTitle}>Reading Behavior</Text>
      <View style={styles.section}>
        <SettingSwitch
          label="Auto Bookmark Last Page"
          value={autoBookmark}
          onValueChange={setAutoBookmark}
        />
        <SettingSwitch
          label="Double-tap to Zoom"
          value={doubleTapZoom}
          onValueChange={setDoubleTapZoom}
        />
        <SettingItem label="Start Screen" value="Library" />
      </View>
    </ScrollView>
  );
};

// Individual setting rows
const SettingItem = ({ label, value }) => (
  <View style={styles.infoItem}>
    <View style={styles.infoLeft}>
      <Text style={styles.infoLabel}>{label}</Text>
    </View>
    {value && <Text style={styles.infoValue}>{value}</Text>}
  </View>
);

const SettingSwitch = ({ label, value, onValueChange }) => (
  <View style={styles.infoItem}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Switch value={value} onValueChange={onValueChange} />
  </View>
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
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  logo: {
    width: 90,
    height: 50,
  },
  appName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
    marginTop: 25,
    marginBottom: 8,
    marginLeft: 20,
  },
  section: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
    backgroundColor: "#FDF8E1",
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 0.4,
    borderColor: "#e5e5e5",
  },
  infoLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoLabel: {
    fontSize: 16,
    color: "#000",
  },
  infoValue: {
    color: "#666",
    fontSize: 15,
  },
});

export default General;
