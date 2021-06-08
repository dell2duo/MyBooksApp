import React, { useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { styles } from "./styles";

const ShowMoreButton = ({ onPress, visible }) => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      bottom: withSpring(offset.value),
    };
  });

  useEffect(() => {
    if (visible) offset.value = 20;
    else
      setTimeout(() => {
        offset.value = -50;
      }, 500);
  }, [visible]);

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>Show More</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ShowMoreButton;
