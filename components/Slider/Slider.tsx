import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import SliderItem from "./SliderItem";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { router } from "expo-router";
import { getCategories } from "@/data/categories";

const Slider = () => {
  const sliderData = getCategories();
  const scrollX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });
  const handlePress = (id: number) => {
    router.push(`/categories/${id}`);
  };
  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={sliderData}
        renderItem={({ item, index }) => (
          <SliderItem
            item={item}
            index={index}
            scrollX={scrollX}
            onPress={handlePress}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={scrollHandler}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // marginRight: -20,
  },
});

export default Slider;
