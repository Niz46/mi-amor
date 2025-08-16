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
} from "react-native";

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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f8ff", paddingTop: 20 },
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
});
