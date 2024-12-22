import { View, Text } from "react-native";
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

  return <View>{bhajan != undefined && <Text>{bhajan.title}</Text>}</View>;
};

export default BhajanDetailPage;
