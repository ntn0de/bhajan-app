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
      image:
        "https://preview.redd.it/jai-shree-krishna-v0-01d1ov30perc1.jpeg?auto=webp&s=d24e9482494f1ddefa7b92b934e8ce1afd95e922",
      title: "Shree Krishna Bhajan",
      artist: "Artist 1",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/premium-photo/shree-ram-hindu-god-lord-shree-ram_789916-4065.jpg?w=350",
      title: "Shree Ram Bhajan",
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
