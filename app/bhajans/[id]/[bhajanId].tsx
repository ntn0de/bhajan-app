import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { getBhajan } from "@/data/bhajans";

const BhajanDetailPage = () => {
  const navigation = useNavigation();
  const { id, bhajanId } = useLocalSearchParams();

  const bhajan = getBhajan(+bhajanId);
  useEffect(() => {
    if (bhajan) {
      navigation.setOptions({ title: bhajan.title });
    }
  }, [bhajan, navigation]);

  //   return <View>{bhajan != undefined && <Text>{bhajan.title}</Text>}</View>;
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Text style={styles.title}>{bhajan.title}</Text> */}
        <Text style={styles.description}>{bhajan.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#fff7f4",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
});

export default BhajanDetailPage;
