import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type SliderItemProps = {
  item: any;
  index: number;
  scrollX: SharedValue<number>;
  onPress: (id: number) => void;
};

const { width } = Dimensions.get("screen");
const SliderItem = ({ item, index, scrollX, onPress }: SliderItemProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.25, 0, width * 0.25],
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.9, 1, 0.9],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <TouchableWithoutFeedback onPress={() => onPress(item.id)}>
      <Animated.View style={[styles.itemContainer, animatedStyle]}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={styles.background}
        >
          <Text>{item.title}</Text>
        </LinearGradient>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "flex-start",
    width: width,
    marginRight: -12,
    marginLeft: 10,
  },
  image: {
    width: 300,
    height: 500,
    borderRadius: 40,
  },
  background: {
    position: "absolute",
    width: 300,
    height: 500,
    borderRadius: 40,
    padding: 20,
    justifyContent: "space-between",
  },
});

export default SliderItem;
