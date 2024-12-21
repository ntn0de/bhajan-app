import CategoryList from "@/components/CategoryList";
import { useLocalSearchParams } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function CategoriesScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <CategoryList categoryId={id} />
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
