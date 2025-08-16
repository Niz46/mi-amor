// src/screens/ContactScreen.js
import { useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { colors } from "../themes/theme";

export default function ContactScreen() {
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const send = () => {
    if (!email || !msg) {
      Alert.alert("Missing fields", "Please include your email and a message.");
      return;
    }

    // simulate async send
    Alert.alert("Message sent", "We will respond within 24 hours.");
    setMsg("");
    setEmail("");
    setName("");
  };

  const openMail = async (to) => {
    const url = `mailto:${to}`;
    try {
      const can = await Linking.canOpenURL(url);
      if (can) {
        Linking.openURL(url);
      } else {
        Alert.alert("Cannot open mail app");
      }
    } catch (e) {
      console.warn("openMail error", e);
      Alert.alert("Error", "Could not open mail app.");
    }
  };

  const openUrl = async (url) => {
    try {
      const can = await Linking.canOpenURL(url);
      if (can) {
        Linking.openURL(url);
      } else {
        Alert.alert("Cannot open link");
      }
    } catch (e) {
      console.warn("openUrl error", e);
      Alert.alert("Error", "Could not open link.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Get in touch</Text>

        <TextInput
          placeholder="Your Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Your Email"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Message"
          style={[styles.input, { height: 120, textAlignVertical: "top" }]}
          value={msg}
          onChangeText={setMsg}
          multiline
        />

        <TouchableOpacity style={styles.sendBtn} onPress={send}>
          <Text style={styles.sendBtnText}>Send Message</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Email</Text>

        <View style={styles.emailBlock}>
          <Text
            style={styles.emailLink}
            onPress={() => openMail("support@miamorplatform.com")}
            accessibilityRole="link"
          >
            support@miamorplatform.com
          </Text>
          <Text
            style={styles.emailLink}
            onPress={() => openMail("info@miamorplatform.com")}
            accessibilityRole="link"
          >
            info@miamorplatform.com
          </Text>
        </View>

        <Text style={[styles.title, { marginTop: 12 }]}>Follow us</Text>

        <View style={styles.socialRow}>
          <TouchableOpacity
            onPress={() => openUrl("https://x.com/miamorplatform?s=21")}
            accessibilityLabel="Twitter"
            style={styles.iconBtn}
          >
            <FontAwesome
              name="twitter"
              size={22}
              color={colors.primary || "#0057e1"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => openUrl("https://facebook.com/")}
            accessibilityLabel="Facebook"
            style={styles.iconBtn}
          >
            <FontAwesome
              name="facebook"
              size={22}
              color={colors.primary || "#0057e1"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => openUrl("https://t.me/+Icd7vhHJhKxkZDA0")}
            accessibilityLabel="Telegram"
            style={styles.iconBtn}
          >
            <FontAwesome
              name="telegram"
              size={22}
              color={colors.primary || "#0057e1"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f8ff",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  card: { margin: 20, backgroundColor: "#fff", padding: 16, borderRadius: 12 },
  title: { fontSize: 20, fontWeight: "800", marginBottom: 12 },
  input: {
    backgroundColor: "#fdfdfd",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e8eefc",
  },
  sendBtn: {
    backgroundColor: "#0057e1",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 6,
  },
  sendBtnText: { color: "#fff", fontWeight: "800" },
  emailBlock: {
    flexDirection: "column",
    gap: 8,
  },
  emailLink: {
    color: colors.primary || "#0057e1",
    textDecorationLine: "underline",
    marginBottom: 6,
  },
  socialRow: {
    flexDirection: "row",
    gap: 16,
    marginTop: 6,
    alignItems: "center",
  },
  iconBtn: {
    padding: 6,
  },
});
