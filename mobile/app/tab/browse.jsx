import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Video } from 'expo-av';

export default function Browse() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Ionicons name="menu" size={24} color="#000" />
        <Image
          source={require("../tab/img/logo.png")}style={styles.logo}
          resizeMode="contain"
        />
        <Ionicons name="search" size={24} color="#000" />
      </View>

      <Video
  source={require("../tab/img/mount.mp4")}
  style={styles.banner}
  resizeMode="cover"
  shouldPlay
  isLooping
  isMuted
/>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categories}
      >
        {["Popular", "Action", "Horror", "Comedy", "Romance"].map((cat, i) => (
          <TouchableOpacity key={i} style={styles.chip}>
            <Text style={styles.chipText}>{cat}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.exploreChip}>
          <Text style={styles.exploreText}>Explore more →</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.cardGrid}>
        {[
          {
            title: "Dandadan",
            chap: "New! Chap 12",
            genre: "Action • Horror",
            img: require("../tab/img/dandadan.jpg"),
          },
          {
            title: "Legend of The Northern Blade",
            chap: "New! Chap 45",
            genre: "Action • Murim",
            img: require("../tab/img/legend.jpg"),
          },
          {
            title: "Gachiakuta,",
            chap: "New! Chap 24",
            genre: "Action • Shounen",
            img: require("../tab/img/gachi.jpg"),
          },
          {
            title: "Berserk",
            chap: "New! Chap 78",
            genre: "Fantasy • Action",
            img: require("../tab/img/bers.jpg"),
          },
          {
            title: "Evangelion",
            chap: "New! Chap 78",
            genre: "Mecha • Mature",
            img: require("../tab/img/evang.jpg"),
          },
        ].map((manga, i) => (
          <View key={i} style={styles.card}>
            <Image source={manga.img} style={styles.cardImage} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{manga.chap}</Text>
            </View>
            <Text style={styles.cardTitle}>{manga.title}</Text>
            <Text style={styles.cardGenre}>{manga.genre}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4EBD0", padding: 15 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 20,
  },
  headerTitle: { fontSize: 20, fontWeight: "700", marginTop: 30, },
  logo: {
    width: 120,
    height: 40,
  },
  banner: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#000",
  },
  categories: { flexDirection: "row", marginBottom: 15 },
  chip: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginRight: 10,
  },
  chipText: { fontSize: 14 },
  exploreChip: {
    backgroundColor: "#9EE493",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  exploreText: { fontSize: 14, fontWeight: "600", color: "#222" },
  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "47%",
    marginBottom: 20,
  },
  cardImage: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 8,
  },
  badge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#00A86B",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: { 
    color: "#fff", 
    fontSize: 10, 
    fontWeight: "600" 
    },
  cardTitle: { 
    fontWeight: "700", 
    fontSize: 14,
  },
  cardGenre: { 
    fontSize: 12, 
    color: "#555" 
  },
});
