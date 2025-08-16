// PaymentScreen.js
import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Linking,
  ScrollView,
  Platform,
  Share,
  StatusBar,
  ToastAndroid,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function PaymentScreen() {
  const account = {
    name: "NWOBODO THANKGOD IFEANYI",
    number: "6231176238",
    bank: "MONIEPOINT",
    packageLabel: "ULTRA PACKAGE",
    price: "₦14,000",
  };

  const [copied, setCopied] = useState(false);

  const copyAccountNumber = async () => {
    try {
      await Clipboard.setStringAsync(account.number);
      setCopied(true);
      if (Platform.OS === "android") {
        ToastAndroid.show(
          "Account number copied to clipboard",
          ToastAndroid.SHORT
        );
      } else {
        Alert.alert("Copied", "Account number copied to clipboard");
      }
      // reset visual state after short delay
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      Alert.alert("Copy failed", `Please copy manually: ${account.number}`);
      console.error("Copy failed:", err);
    }
  };

  const openExternal = async (channel) => {
    const message =
      "I have made payment for MiAmor registration. Please confirm.\n\n" +
      `Account name: ${account.name}\n` +
      `Account number: ${account.number}\n` +
      `Package: ${account.packageLabel} (${account.price})\n\n` +
      "After confirmation, please help register with the following details:\n" +
      "- Preferred Username:\n- Preferred Password:\n- Email (Gmail):\n- Full Name:\n- Phone Number:\n\nThank you.";

    let url = "";
    if (channel === "telegram") {
      url = `https://t.me/Mi_AmorOfficial?text=${encodeURIComponent(message)}`;
    } else if (channel === "whatsapp") {
      // using international number you provided in HTML
      url = `https://wa.me/2349042108024?text=${encodeURIComponent(message)}`;
    }

    try {
      const supported = await Linking.canOpenURL(url);
      if (!supported) {
        Alert.alert(
          "Cannot open link",
          `Your device cannot open ${channel}. Please open it manually and send the message.`
        );
        return;
      }
      await Linking.openURL(url);
    } catch (err) {
      console.error("openExternal error:", err);
      Alert.alert("Error", "Could not open messaging app.");
    }
  };

  const shareDetails = async () => {
    const text = `MiAmor registration payment\nAccount: ${account.name}\nACC NO: ${account.number}\nBank: ${account.bank}\nPackage: ${account.packageLabel} — ${account.price}`;
    try {
      await Share.share({ message: text });
    } catch (err) {
      console.error("Share failed", err);
      Alert.alert("Share failed", "Unable to share payment details.");
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#f6f8ff" />
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card} accessibilityRole="summary">
          <View style={styles.headerRow}>
            <Text style={styles.title}>Registration Payment</Text>
            <View style={styles.priceBadge}>
              <Text style={styles.badgeLabel}>{account.packageLabel}</Text>
              <Text style={styles.price}>{account.price}</Text>
            </View>
          </View>

          <Text style={styles.subtitle}>
            To register for <Text style={styles.brand}>Mi Amor</Text> pay the
            agency code to start earning. After payment send your account name
            for confirmation, then submit your registration details.
          </Text>

          <View style={styles.bankContainer}>
            <View style={styles.bankRow}>
              <MaterialIcons name="account-circle" size={18} />
              <View style={styles.bankText}>
                <Text style={styles.label}>ACC NAME</Text>
                <Text style={styles.value}>{account.name}</Text>
              </View>
            </View>

            <View style={styles.bankRow}>
              <MaterialIcons name="credit-card" size={18} />
              <View style={styles.bankText}>
                <Text style={styles.label}>ACC NO</Text>
                <Text style={styles.value}>{account.number}</Text>
              </View>

              <TouchableOpacity
                style={[styles.copyBtn, copied && styles.copyBtnActive]}
                onPress={copyAccountNumber}
                accessibilityLabel="Copy account number"
              >
                <FontAwesome
                  name={copied ? "check" : "copy"}
                  size={14}
                  color="#fff"
                />
                <Text style={styles.copyBtnText}>
                  {copied ? "Copied" : "Copy"}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bankRow}>
              <MaterialIcons name="account-balance" size={18} />
              <View style={styles.bankText}>
                <Text style={styles.label}>BANK</Text>
                <Text style={styles.value}>{account.bank}</Text>
              </View>
            </View>
          </View>

          <View style={styles.steps}>
            <Text style={styles.stepTitle}>After payment</Text>
            <Text style={styles.stepText}>
              1. Send account name for confirmation.
            </Text>
            <Text style={styles.stepText}>
              2. After confirmation send: Preferred username, password, Gmail,
              full name, phone.
            </Text>
          </View>

          <View style={styles.ctaContainer}>
            <TouchableOpacity
              style={[styles.cta, styles.telegram]}
              onPress={() => openExternal("telegram")}
              accessibilityRole="link"
              accessibilityLabel="Send details on Telegram"
            >
              <FontAwesome name="telegram" size={18} color="#fff" />
              <Text style={styles.ctaText}>Send Details on Telegram</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.cta, styles.whatsapp]}
              onPress={() => openExternal("whatsapp")}
              accessibilityRole="link"
              accessibilityLabel="Send details on WhatsApp"
            >
              <FontAwesome name="whatsapp" size={18} color="#fff" />
              <Text style={styles.ctaText}>Send Details on WhatsApp</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.cta, styles.secondary]}
              onPress={shareDetails}
              accessibilityLabel="Share payment details"
            >
              <MaterialIcons name="share" size={18} color="#0057e1" />
              <Text style={[styles.ctaText, styles.secondaryText]}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footerNote}>
          <Text style={styles.noteText}>
            Note: Please keep your payment proof and the transaction reference
            for quick confirmation.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f6f8ff", marginTop: 24 },
  container: {
    padding: 16,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  title: { fontSize: 18, fontWeight: "800", color: "#111" },
  priceBadge: { alignItems: "flex-end" },
  badgeLabel: { fontSize: 12, fontWeight: "700", color: "#ff8a00" },
  price: { fontSize: 20, fontWeight: "900", color: "#ff8a00", marginTop: 2 },

  subtitle: { color: "#444", marginBottom: 16, lineHeight: 20 },
  brand: { fontWeight: "800" },

  bankContainer: { marginVertical: 6 },
  bankRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  bankText: { marginLeft: 10, flex: 1 },
  label: { color: "#666", fontSize: 12, fontWeight: "700" },
  value: { fontSize: 15, fontWeight: "800", marginTop: 2 },

  copyBtn: {
    backgroundColor: "#0057e1",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  copyBtnActive: { backgroundColor: "#0a8a16" },
  copyBtnText: { color: "#fff", marginLeft: 8, fontWeight: "700" },

  steps: {
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#f1f1f1",
    paddingTop: 12,
  },
  stepTitle: { fontWeight: "800", marginBottom: 6 },
  stepText: { color: "#555", marginBottom: 6 },

  ctaContainer: { marginTop: 14, gap: 10 },
  cta: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    justifyContent: "center",
    gap: 10,
    marginBottom: 8,
  },
  telegram: { backgroundColor: "#2AABEE" },
  whatsapp: { backgroundColor: "#25D366" },
  secondary: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e6e9f0",
  },
  ctaText: { color: "#fff", fontWeight: "800" },
  secondaryText: { color: "#0057e1" },

  footerNote: { marginTop: 12, alignItems: "center" },
  noteText: { color: "#777", fontSize: 13, textAlign: "center" },
});
