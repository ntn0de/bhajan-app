import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textGreeting}>Hello Saroj!</Text>
      <Text style={styles.text}>Welcome to bhajan app</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fffcf9",
  },
  textGreeting: {
    color: "#222",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  text: {
    color: "gray",
    fontSize: 16,
    // fontWeight: "bold",
    textAlign: "left",
  },
});

export default Header;
