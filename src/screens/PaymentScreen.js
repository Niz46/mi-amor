// src/screens/PaymentScreen.js
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Clipboard from "expo-clipboard";

export default function PaymentScreen({ route }) {
  const account = {
    name: "NWOBODO THANKGOD IFEANYI",
    number: "6231176238",
    bank: "MONIEPOINT",
    price: "₦14,000",
  };

  const onCopy = async () => {
    try {
      await Clipboard.setStringAsync(account.number);
      Alert.alert("Copied", "Account number copied to clipboard");
    } catch (err) {
      Alert.alert("Copy", "Please copy the number manually: " + account.number);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Registration Payment</Text>
        <Text style={styles.price}>{account.price}</Text>

        <View style={styles.detail}>
          <Text style={styles.label}>ACC NAME</Text>
          <Text style={styles.value}>{account.name}</Text>
        </View>

        <View style={styles.detail}>
          <Text style={styles.label}>ACC NO</Text>
          <Text style={styles.value}>{account.number}</Text>
        </View>

        <View style={styles.detail}>
          <Text style={styles.label}>BANK</Text>
          <Text style={styles.value}>{account.bank}</Text>
        </View>

        <TouchableOpacity style={styles.btn} onPress={onCopy}>
          <Text style={styles.btnText}>Copy Account Number</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f8ff",
    padding: 10,
    paddingTop: 30,
  },
  card: { backgroundColor: "#fff", padding: 18, borderRadius: 12 },
  title: { fontWeight: "800", fontSize: 18 },
  price: {
    fontWeight: "900",
    color: "#ff8a00",
    fontSize: 22,
    marginVertical: 10,
  },
  detail: { marginTop: 6 },
  label: { color: "#666", fontWeight: "700" },
  value: { fontWeight: "700" },
  btn: {
    marginTop: 14,
    backgroundColor: "#0057e1",
    padding: 12,
    borderRadius: 8,
  },
  btnText: { color: "#fff", textAlign: "center", fontWeight: "700" },
});
