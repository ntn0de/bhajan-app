import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import SliderItem from "./SliderItem";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

const Slider = () => {
  const sliderData = [
    {
      id: 1,
      image: "https://placehold.jp/300x500.png?text=Bhajan+1",
      title: "Bhajan 1",
      artist: "Artist 1",
    },
    {
      id: 2,
      image: "https://placehold.jp/300x500.png?text=Bhajan+2",
      title: "Bhajan 2",
      artist: "Artist 2",
    },
    {
      id: 3,
      image: "https://placehold.jp/300x500.png?text=Bhajan+3",
      title: "Bhajan 3",
      artist: "Artist 3",
    },
    {
      id: 4,
      image: "https://placehold.jp/300x500.png?text=Bhajan+4",
      title: "Bhajan 4",
      artist: "Artist 4",
    },
  ];
  const scrollX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });
  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={sliderData}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} scrollX={scrollX} />
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
