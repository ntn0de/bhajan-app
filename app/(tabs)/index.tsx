import { Link, RelativePathString } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SearchBar } from "../../components/SearchBar";
import Badges from "@/components/Badges";
import SectionHeader from "@/components/SectionHeader";
import Slider from "../../components/Slider/Slider";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff7f4",
    flex: 1,
    padding: 10,
  },
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Badges />
      <SectionHeader
        title="Famous Bhajans"
        link={"/settings" as RelativePathString}
        linkText="Show all"
      />
      <Slider />
    </View>
  );
};

export default HomeScreen;
