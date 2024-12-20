import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link, RelativePathString } from "expo-router";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff7f4",
    flex: 1,
    padding: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  link: {
    color: "#fe5c02",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
const SectionHeader = ({
  title,
  link,
  linkText,
}: {
  title: string;
  link: RelativePathString;
  linkText: string;
}) => {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.title}>{title}</Text>
      <Link style={styles.link} href={link}>
        {linkText}
      </Link>
    </View>
  );
};

export default SectionHeader;
