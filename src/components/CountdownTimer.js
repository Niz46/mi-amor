// src/components/CountdownTimer.js
import { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
  Animated as RNAnimated,
  Platform,
} from "react-native";

export default function CountdownTimer({ initialSeconds = 0 }) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    const t = setInterval(
      () => setSecondsLeft((s) => Math.max(s - 1, 0)),
      1000
    );
    return () => clearInterval(t);
  }, []);

  const d = Math.floor(secondsLeft / 86400);
  const h = Math.floor((secondsLeft % 86400) / 3600);
  const m = Math.floor((secondsLeft % 3600) / 60);
  const s = secondsLeft % 60;

  const scale = useRef(new RNAnimated.Value(1)).current;
  const onPressIn = () => {
    RNAnimated.spring(scale, {
      toValue: 0.98,
      useNativeDriver: true,
      speed: 20,
      bounciness: 0,
    }).start();
  };
  const onPressOut = () => {
    RNAnimated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 20,
      bounciness: 0,
    }).start();
  };

  const openUrl = async (url) => {
    try {
      const can = await Linking.canOpenURL(url);
      if (can) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Cannot open link", "Your device cannot open this link.");
      }
    } catch (e) {
      console.warn("openUrl error", e);
      Alert.alert("Error", "Could not open link.");
    }
  };

  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>🎁 Early-Bird Offer Ends</Text>

      <View style={styles.row}>
        {[d, h, m, s].map((v, i) => (
          <View key={i} style={styles.box}>
            <Text style={styles.boxText}>{String(v).padStart(2, "0")}</Text>
          </View>
        ))}
      </View>

      <RNAnimated.View style={{ transform: [{ scale }], marginTop: 14 }}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => openUrl("https://t.me/+appwmxRApoE4M2Vk")}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          style={styles.ctaBtnTouchable}
        >
          <Text style={styles.ctaBtnText}>Claim My Spot</Text>
        </TouchableOpacity>
      </RNAnimated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginTop: 12, alignItems: "center" },
  label: { color: "#fff", fontWeight: "700", marginBottom: 8 },
  row: { flexDirection: "row" },
  box: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
    marginHorizontal: 6,
    minWidth: 56,
    alignItems: "center",
  },
  boxText: { fontWeight: "900", fontSize: 18 },

  ctaBtnTouchable: {
    backgroundColor: "#ffd041",
    paddingVertical: Platform.OS === "android" ? 12 : 14,
    paddingHorizontal: 22,
    borderRadius: 999,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 14,
    elevation: 6,
  },
  ctaBtnText: {
    color: "#001529",
    fontWeight: "800",
    fontSize: 15,
  },
});
