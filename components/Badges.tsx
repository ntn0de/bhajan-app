import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Badges = () => {
  const badgeData = [
    { key: "Devin" },
    { key: "Dan" },
    { key: "Dominic" },
    { key: "Jackson" },
    { key: "James" },
    { key: "Joel" },
    { key: "John" },
    { key: "Jillian" },
    { key: "Jimmy" },
    { key: "Julie" },
  ];
  return (
    <SafeAreaView style={styles.badges}>
      <FlatList
        horizontal
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate={0.99}
        data={badgeData}
        renderItem={({ item }) => (
          <Text style={styles.badgeItem}>{item.key}</Text>
        )}
        keyExtractor={(item) => item.key}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  badges: {
    // paddingLeft: 10,
  },

  badgeItem: {
    marginRight: 10,
    padding: 10,
    fontSize: 16,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ffe5d7",
    backgroundColor: "#ffffff",
    borderRadius: 40,
  },
});

export default Badges;
