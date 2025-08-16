// src/components/CountdownTimer.js
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

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

  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>Early-Bird Offer Ends</Text>
      <View style={styles.row}>
        {[d, h, m, s].map((v, i) => (
          <View key={i} style={styles.box}>
            <Text style={styles.boxText}>{String(v).padStart(2, "0")}</Text>
          </View>
        ))}
      </View>
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
});
