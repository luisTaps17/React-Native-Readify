import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Switch,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import Slider from "@react-native-community/slider";


const Appearance = () => {
  const router = useRouter();

  // States for toggles
  const [appTheme, setAppTheme] = useState("System Default");
  const [showPageNumbers, setShowPageNumbers] = useState(true);
  const [showProgressBar, setShowProgressBar] = useState(true);
  const [brightnessControl, setBrightnessControl] = useState(false);

  // Toggle between 3 themes
  const toggleTheme = () => {
    if (appTheme === "Light") setAppTheme("Dark");
    else if (appTheme === "Dark") setAppTheme("System Default");
    else setAppTheme("Light");
  };

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
      <Text style={styles.headerTitle}>Appearance</Text>

      {/* 🧩 Theme Section */}
      <Text style={styles.sectionTitle}>Theme</Text>
      <View style={styles.section}>
        <SettingItem
          label="App Theme"
          value={appTheme}
          onPress={toggleTheme}
        />
      </View>

      {/* 📚 Reader Theme Section */}
      <Text style={styles.sectionTitle}>Reader Theme</Text>
      <View style={styles.section}>
        <SettingSwitch
          label="Show Page Numbers"
          value={showPageNumbers}
          onValueChange={setShowPageNumbers}
        />
        <SettingSwitch
          label="Show Reading Progress Bar"
          value={showProgressBar}
          onValueChange={setShowProgressBar}
        />
      </View>

      {/* 🔠 Text & Display Section */}
      <Text style={styles.sectionTitle}>Text & Display</Text>
      <View style={styles.section}>
        <SettingItem label="Font Style" value="Poppins" />
        <SettingItem label="Font Size" value="Medium" />
        <Text style={styles.subLabel}>Brightness Control</Text>
<View style={styles.sliderContainer}>
  <Slider
    style={{ width: "90%", height: 40 }}
    minimumValue={0}
    maximumValue={1}
    minimumTrackTintColor="#D8C59C"
    maximumTrackTintColor="#ccc"
    thumbTintColor="#333"
    value={0.5} // starting middle
    onValueChange={(value) => {
      // no function yet, just placeholder
    }}
  />
</View>
      </View>
    </ScrollView>
  );
};

/* 🔹 Reusable Setting Item */
const SettingItem = ({ label, value, onPress }) => (
  <TouchableOpacity
    style={styles.settingItem}
    onPress={onPress}
    activeOpacity={onPress ? 0.6 : 1}
  >
    <Text style={styles.label}>{label}</Text>
    <View style={styles.valueContainer}>
      <Text style={styles.value}>{value}</Text>
      {onPress && (
        <Ionicons name="chevron-forward" size={18} color="#aaa" style={{ marginLeft: 4 }} />
      )}
    </View>
  </TouchableOpacity>
);

/* 🔹 Reusable Switch Item */
const SettingSwitch = ({ label, value, onValueChange }) => (
  <View style={styles.settingItem}>
    <Text style={styles.label}>{label}</Text>
    <Switch
      value={value}
      onValueChange={onValueChange}
      thumbColor={value ? "#333" : "#ccc"}
      trackColor={{ true: "#D8C59C", false: "#eee" }}
    />
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
    fontSize: 18,
    fontWeight: "600",
    paddingHorizontal: 16,
    marginTop: 15,
    marginBottom: 8,
    color: "#333",
  },
  section: {
    backgroundColor: "#FDF8E1",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  value: {
    fontSize: 15,
    color: "#666",
  },
  sliderContainer: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginVertical: 10,
},
subLabel: {
  fontSize: 16,
  color: "#333",
  paddingHorizontal: 16,
  marginTop: 10,
  marginBottom: 5,
},

});

export default Appearance;
