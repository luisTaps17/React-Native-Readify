import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Library() {
  const mangaList = [
    {
      title: "Eternally Regressing Knight",
      chap: "70",
      img: require("../tab/img/knight.jpg"),
    },
    {
      title: "Her Summon",
      chap: "120",
      img: require("../tab/img/summon.jpg"),
    },
  
    {
      title: "Return of the Mount Hua Sect",
      chap: "157",
      img: require("../tab/img/sect.jpg"),
    },
     {
      title: "Pick me Up! Infinite Gacha",
      chap: "155",
      img: require("../tab/img/gachas.png"),
    },
    
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Library</Text>
      </View>

      {/* Manga grid */}
      <View style={styles.grid}>
        {mangaList.map((manga, i) => (
          <View key={i} style={styles.card}>
            <Image source={manga.img} style={styles.cover} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{manga.chap}</Text>
            </View>
            <Text style={styles.title}>{manga.title}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4EBD0", padding: 15 },
  header: {
    marginBottom: 15,
    alignItems: "center", // center horizontally
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
    marginTop: 30,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    marginBottom: 20,
  },
  cover: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  badge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#3B82F6",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  badgeText: { color: "#fff", fontSize: 12, fontWeight: "bold" },
  title: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: "600",
    color: "#222",
  },
});
