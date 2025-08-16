import { useEffect } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

export default function AnimatedFeatureCard({
  iconName = "bolt",
  title,
  subtitle,
}) {
  const translateY = useSharedValue(26);
  const opacity = useSharedValue(0);
  const pressScale = useSharedValue(1);

  useEffect(() => {
    translateY.value = withTiming(0, {
      duration: 520,
      easing: Easing.out(Easing.cubic),
    });
    opacity.value = withTiming(1, { duration: 520 });
  }, []);

  const aStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: translateY.value },
        { scale: pressScale.value },
      ],
      opacity: opacity.value,
    };
  }, []);

  return (
    <Pressable
      onPress={() => {}}
      onPressIn={() => {
        pressScale.value = withTiming(0.985, { duration: 120 });
      }}
      onPressOut={() => {
        pressScale.value = withTiming(1, { duration: 160 });
      }}
      style={{ width: "100%" }}
    >
      <Animated.View style={[styles.card, aStyle]}>
        <View style={styles.iconWrap}>
          <FontAwesome
            name={iconName}
            size={36}
            color="#0057e1"
            style={styles.icon}
          />
        </View>

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{subtitle}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 14,
    minHeight: 120,
    alignItems: "center",
    justifyContent: "flex-start",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 18,
    elevation: 2,
  },
  iconWrap: {
    width: 64,
    height: 64,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    backgroundColor: "#f2f6ff",
  },
  icon: {},
  title: {
    fontWeight: "800",
    fontSize: 16,
    marginBottom: 8,
    textAlign: "center",
  },
  text: {
    color: "#444",
    textAlign: "center",
    lineHeight: 18,
  },
});
