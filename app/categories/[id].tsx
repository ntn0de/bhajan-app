import GenericList from "@/components/GenericList";
import { getCategory } from "@/data/categories";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { View, StyleSheet } from "react-native";

export default function CategoriesScreen() {
  const { id } = useLocalSearchParams();

  const categories = getCategory(+id);
  useEffect(() => {
    if (categories.length === 0) {
      router.replace(`./bhajans/${id}`);
    }
  }, [categories, id]);
  return (
    <View style={styles.container}>
      {categories.length > 0 && (
        <GenericList data={categories} dataType="categories" />
      )}
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
