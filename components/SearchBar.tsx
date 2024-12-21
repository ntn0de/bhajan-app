import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Search..." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ffe5d7",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 40,
    fontSize: 16,
  },
});
