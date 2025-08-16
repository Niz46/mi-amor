// src/components/FAQSection.js
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

/**
 * NOTE:
 * We intentionally DO NOT call UIManager.setLayoutAnimationEnabledExperimental(...)
 * because that call is a no-op in the New Architecture and causes the warning you saw.
 */

export default function FAQSection({ items = [] }) {
  return (
    <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
      <Text style={styles.heading}>Frequently Asked Questions</Text>
      {items.map((it, i) => (
        <FAQItem key={i} {...it} />
      ))}
    </View>
  );
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    // animate layout changes (works on both platforms; no experimental enable call)
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen((p) => !p);
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={toggle} style={styles.row}>
        <Text style={styles.q}>{question}</Text>
        <Icon
          name={open ? "chevron-up" : "chevron-down"}
          size={18}
          color="#0057e1"
        />
      </TouchableOpacity>
      {open && <Text style={styles.a}>{answer}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: { fontSize: 18, fontWeight: "800", marginBottom: 12 },
  item: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#eef2ff",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  q: { fontWeight: "700", flex: 1, marginRight: 8 },
  a: { marginTop: 10, color: "#444" },
});
