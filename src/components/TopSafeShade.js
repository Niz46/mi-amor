// src/components/TopSafeShade.js
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TopSafeShade({ color = "rgba(0,0,0,0.1)" }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      pointerEvents="none"
      style={[styles.shade, { height: insets.top, backgroundColor: color }]}
    />
  );
}

const styles = StyleSheet.create({
  shade: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
  },
});
