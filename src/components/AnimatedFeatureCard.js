// src/components/AnimatedFeatureCard.js
import { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

export default function AnimatedFeatureCard({ title, subtitle }) {
  const translateY = useSharedValue(26);
  const opacity = useSharedValue(0);

  useEffect(() => {
    // start animation once mounted
    translateY.value = withTiming(0, {
      duration: 520,
      easing: Easing.out(Easing.cubic),
    });
    opacity.value = withTiming(1, { duration: 520 });
  }, []);

  const aStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[styles.card, aStyle]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{subtitle}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    margin: 6,
    minHeight: 96,
    elevation: 2,
  },
  title: { fontWeight: "700", marginBottom: 6 },
  text: { color: "#444" },
});
