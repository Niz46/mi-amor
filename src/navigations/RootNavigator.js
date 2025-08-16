// src/navigations/RootNavigator.js
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import RegisterScreen from "../screens/RegisterScreen";
import PaymentScreen from "../screens/PaymentScreen";
import PrivacyPolicy from "../screens/PrivacyPolicy";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RootTabs" component={BottomTabs} />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ presentation: "modal" }}
      />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    </Stack.Navigator>
  );
}
