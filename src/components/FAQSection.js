// src/components/FAQSection.js
import { useState, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

/**
 * FAQSection
 * - items: [{ question, answer }]
 * - The last item is open by default (matches your HTML)
 *
 * Note: we intentionally DO NOT call UIManager.setLayoutAnimationEnabledExperimental(...)
 * because that call is a no-op in the New Architecture and causes warnings.
 */

export default function FAQSection({ items = [] }) {
  const defaultIndex = useMemo(
    () => (items.length ? items.length - 1 : null),
    [items]
  );
  const [openIndex, setOpenIndex] = useState(defaultIndex);

  const toggle = (i) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <View style={styles.root}>
      <Text style={styles.heading}>Frequently Asked Questions</Text>

      <View style={styles.inner}>
        {items.map((it, i) => {
          const open = openIndex === i;
          return (
            <View
              key={i}
              style={[styles.item, open ? styles.itemOpen : styles.itemClosed]}
            >
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => toggle(i)}
                style={styles.row}
              >
                <Text
                  numberOfLines={2}
                  style={[styles.q, open && styles.qOpen]}
                >
                  {it.question}
                </Text>

                <Icon
                  name={open ? "chevron-up" : "chevron-down"}
                  size={18}
                  color={open ? "#ffd041" : "#cfe6ff"}
                />
              </TouchableOpacity>

              {open && <Text style={styles.a}>{it.answer}</Text>}
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#114890ff",
    paddingVertical: 24,
    paddingHorizontal: 12,
    marginTop: 24,
  },

  heading: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 10,
  },

  inner: {
    alignSelf: "center",
    width: "100%",
    maxWidth: 880,
  },

  item: {
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    overflow: "hidden",
  },
  itemClosed: {
    backgroundColor: "rgba(255,255,255,0.04)",
  },
  itemOpen: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderColor: "rgba(255,255,255,0.10)",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  q: {
    color: "#eaf3ff",
    fontWeight: "700",
    flex: 1,
    marginRight: 10,
    fontSize: 15,
  },

  qOpen: {
    color: "#001529",
  },

  a: {
    marginTop: 12,
    color: "#cfe6ff",
    lineHeight: 20,
    fontSize: 14,
  },
});
