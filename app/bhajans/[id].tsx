import GenericList from "@/components/GenericList";
import { getBhajans } from "@/data/bhajans";
import { getCategory } from "@/data/categories";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { View, StyleSheet } from "react-native";

export default function CategoriesScreen() {
  const { id } = useLocalSearchParams();

  const bhajans = getBhajans(+id);
  return (
    <View style={styles.container}>
      {bhajans.length > 0 && <GenericList data={bhajans} dataType="bhajans" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff7f4",
  },
});
