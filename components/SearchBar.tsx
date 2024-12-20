import React from "react";
import { TextInput, StyleSheet } from "react-native";

export const SearchBar = () => {
  return <TextInput style={styles.searchInput} placeholder="Search..." />;
};

const styles = StyleSheet.create({
  searchInput: {
    borderWidth: 1,
    borderColor: "#ffe5d7",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 40,
    fontSize: 16,
  },
});
