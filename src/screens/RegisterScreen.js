// src/screens/RegisterScreen.js
import { useState } from "react";
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
  });

  const handleSubmit = () => {
    // basic validation
    if (!form.username || !form.phone || !form.password) {
      Alert.alert(
        "Missing fields",
        "Please fill username, phone, and password."
      );
      return;
    }

    // Navigate to Payment and pass info
    navigation.navigate("Payment", {
      username: form.username,
      phone: form.phone,
    });
  };

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

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
            placeholder="Password"
            value={form.password}
            onChangeText={(t) => update("password", t)}
            secureTextEntry
            style={styles.input}
          />

          {/* small optional toggles for gender/country - keep simple */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 8,
            }}
          >
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

            <TouchableOpacity style={[styles.pill, styles.disabledPill]}>
              <Text style={styles.pillText}>Country: {form.country}</Text>
            </TouchableOpacity>
          </View>

          <View style={{ height: 12 }} />

          <TouchableOpacity
            style={styles.submitBtn}
            onPress={handleSubmit}
            accessibilityRole="button"
          >
            <Text style={styles.submitBtnText}>Sign Up</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

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
  disabledPill: { opacity: 0.9 },
  submitBtn: {
    marginTop: 8,
    backgroundColor: "#0057e1",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  submitBtnText: { color: "#fff", fontWeight: "800" },
});
