import GenericList from "@/components/GenericList";
import { getBhajans } from "@/data/bhajans";
import { getCategory } from "@/data/categories";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { View, StyleSheet } from "react-native";

export default function BhajansScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  console.log({ id }, "bhajans");

  const bhajans = getBhajans(+id);
  useEffect(() => {
    if (bhajans.length != 0) {
      navigation.setOptions({ title: "All Bhajans" });
    }
  }, [bhajans, id]);
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
