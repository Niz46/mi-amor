// src/screens/RegisterScreen.js
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function RegisterScreen({ navigation }) {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    username: "",
    phone: "",
    password: "",
    country: "Nigeria",
    gender: "Male",
    coupon: "",
  });

  const [privacyChecked, setPrivacyChecked] = useState(false);

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const handleGetCode = () => {
    // navigate to Payment to buy/get matchmaking code
    navigation.navigate("Payment", { from: "register" });
  };

  const handleSubmit = () => {
    // basic validation
    if (!form.username || !form.phone || !form.password) {
      Alert.alert(
        "Missing fields",
        "Please fill username, phone, and password."
      );
      return;
    }
    if ((form.password || "").length < 6) {
      Alert.alert(
        "Weak password",
        "Password must be at least 6 characters long."
      );
      return;
    }
    if (!privacyChecked) {
      Alert.alert(
        "Privacy policy",
        "You must agree with the Privacy Policy to continue."
      );
      return;
    }

    // All good — navigate to Payment and pass info (or send to API)
    navigation.navigate("Payment", {
      username: form.username,
      phone: form.phone,
      first_name: form.first_name,
      last_name: form.last_name,
      coupon: form.coupon,
    });
  };

  // simple country picker that toggles between options on press
  const toggleCountry = () =>
    update("country", form.country === "Nigeria" ? "Foreign" : "Nigeria");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Create Your Mi Amor Account</Text>

          <View style={styles.row}>
            <TextInput
              placeholder="First name"
              value={form.first_name}
              onChangeText={(t) => update("first_name", t)}
              style={[styles.input, { flex: 1, marginRight: 8 }]}
              autoCapitalize="words"
            />
            <TextInput
              placeholder="Last name"
              value={form.last_name}
              onChangeText={(t) => update("last_name", t)}
              style={[styles.input, { flex: 1 }]}
              autoCapitalize="words"
            />
          </View>

          <TextInput
            placeholder="Username"
            value={form.username}
            onChangeText={(t) => update("username", t)}
            style={styles.input}
            autoCapitalize="none"
          />

          <TextInput
            placeholder="Phone number"
            value={form.phone}
            onChangeText={(t) => update("phone", t)}
            style={styles.input}
            keyboardType="phone-pad"
          />

          <TextInput
            placeholder="Password (min 6 chars)"
            value={form.password}
            onChangeText={(t) => update("password", t)}
            secureTextEntry
            style={styles.input}
          />

          {/* Coupon / Matchmaking code input */}
          <TextInput
            placeholder="Matchmaking / Coupon Code"
            value={form.coupon}
            onChangeText={(t) => update("coupon", t)}
            style={styles.input}
            autoCapitalize="characters"
          />

          {/* Code banner (matches your HTML block) */}
          <View style={styles.codeBanner}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.codeLabel}
              onPress={() =>
                Alert.alert(
                  "Code required",
                  "This account requires a matchmaking code."
                )
              }
            >
              <Text style={styles.codeLabelText}>🔑 CODE NEEDED</Text>
            </TouchableOpacity>

            <Text style={styles.codeBannerTitle}>No Matchmaking Code Yet?</Text>
            <Text style={styles.codeBannerCopy}>
              Get yours instantly and start your love journey to start earning
              today.
            </Text>

            <View style={{ height: 8 }} />

            <TouchableOpacity
              style={styles.getCodeBtn}
              onPress={handleGetCode}
              activeOpacity={0.9}
            >
              <Text style={styles.getCodeBtnText}>Get My Code</Text>
            </TouchableOpacity>
          </View>

          {/* gender / country row */}
          <View style={styles.toggleRow}>
            <TouchableOpacity
              style={[styles.pill, form.gender === "Male" && styles.pillActive]}
              onPress={() => update("gender", "Male")}
            >
              <Text
                style={
                  form.gender === "Male"
                    ? styles.pillTextActive
                    : styles.pillText
                }
              >
                Male
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.pill,
                form.gender === "Female" && styles.pillActive,
              ]}
              onPress={() => update("gender", "Female")}
            >
              <Text
                style={
                  form.gender === "Female"
                    ? styles.pillTextActive
                    : styles.pillText
                }
              >
                Female
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.pill, styles.disabledPill]}
              onPress={toggleCountry}
              accessibilityHint="Tap to toggle country"
            >
              <Text style={styles.pillText}>Country: {form.country}</Text>
            </TouchableOpacity>
          </View>

          {/* privacy checkbox */}
          <TouchableOpacity
            style={styles.privacyRow}
            onPress={() => setPrivacyChecked((p) => !p)}
          >
            <View
              style={[
                styles.checkbox,
                privacyChecked && styles.checkboxChecked,
              ]}
            >
              {privacyChecked && <Text style={styles.checkboxTick}>✓</Text>}
            </View>
            <Text style={styles.privacyText}>
              I agree with the{" "}
              <Text
                style={styles.linkText}
                onPress={() => navigation.navigate("PrivacyPolicy")}
              >
                Privacy Policy
              </Text>
              .
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.submitBtn}
            onPress={handleSubmit}
            accessibilityRole="button"
          >
            <Text style={styles.submitBtnText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={{ height: 40 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

/* ----- STYLES ----- */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f8ff" },
  content: { padding: 20, paddingTop: 32 },
  title: { fontSize: 20, fontWeight: "800", marginBottom: 12 },
  row: { flexDirection: "row" },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e4e7f2",
  },

  /* code banner styles */
  codeBanner: {
    marginTop: 6,
    backgroundColor: "#ffcc00",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#eef2ff",
  },
  codeLabel: {
    alignSelf: "flex-start",
    backgroundColor: "#0052cc",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  codeLabelText: {
    fontWeight: "800",
    color: "#fff",
  },
  codeBannerTitle: {
    fontWeight: "800",
    marginTop: 12,
    marginBottom: 4,
    fontSize: 14,
  },
  codeBannerCopy: {
    color: "#444",
  },
  getCodeBtn: {
    marginTop: 8,
    alignSelf: "flex-start",
    backgroundColor: "#0052cc",
    borderWidth: 1,
    borderColor: "#e4e7f2",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  getCodeBtnText: { fontWeight: "800", color: "#fff" },

  /* toggles/pills */
  toggleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 12,
  },
  pill: {
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e4e7f2",
  },
  pillActive: { backgroundColor: "#ffd041", borderColor: "#ffd041" },
  pillText: { color: "#333", fontWeight: "600" },
  pillTextActive: { color: "#001529", fontWeight: "800" },
  disabledPill: { opacity: 0.95 },

  /* privacy */
  privacyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#cfd8f8",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: "#0057e1",
    borderColor: "#0057e1",
  },
  checkboxTick: {
    color: "#fff",
    fontWeight: "800",
  },
  privacyText: {
    flex: 1,
    color: "#333",
  },
  linkText: {
    color: "#0057e1",
    fontWeight: "700",
    textDecorationLine: "underline",
  },

  submitBtn: {
    marginTop: 12,
    backgroundColor: "#0057e1",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  submitBtnText: { color: "#fff", fontWeight: "800" },
});
