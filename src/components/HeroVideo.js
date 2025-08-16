// src/components/HeroVideo.js
import { StyleSheet, Dimensions, View } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

const { width: SCREEN_W } = Dimensions.get("window");

export default function HeroVideo({
  source,
  size = Math.round(SCREEN_W * 0.45),
  scrollY = null,
  style,
}) {
  const height = Math.round(size * 0.72);
  const player = useVideoPlayer(source, (playerInstance) => {
    try {
      playerInstance.loop = true;
      playerInstance.play();
    } catch (e) {
      console.warn("Video player init:", e);
    }
  });

  const aStyle = useAnimatedStyle(() => {
    if (!scrollY) return {};
    const t = interpolate(scrollY.value, [0, 200], [0, -10], Extrapolate.CLAMP);
    const s = interpolate(
      scrollY.value,
      [0, 200],
      [1, 0.985],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ translateY: t }, { scale: s }],
    };
  }, [scrollY]);

  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.wrap, { width: size, height }, style, aStyle]}
    >
      <View style={styles.card}>
        <VideoView
          player={player}
          style={styles.video(size, height)}
          nativeControls={false}
          contentFit="cover"
          allowsFullscreen={false}
        />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
    overflow: "hidden",
    // iOS shadow
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    // Android elevation
    elevation: 6,
    backgroundColor: "#000",
  },
  video: (w, h) => ({
    width: w,
    height: h,
    backgroundColor: "#000",
  }),
});
