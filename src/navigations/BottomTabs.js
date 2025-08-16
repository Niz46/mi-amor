// src/navigations/BottomTabs.js
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ContactScreen from "../screens/ContactScreen";
import Icon from "react-native-vector-icons/Feather";
import { colors } from "../themes/theme";

const Tab = createBottomTabNavigator();

function TabIconLabel({ name, label, focused }) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        minWidth: 64,
        flexShrink: 0,
      }}
    >
      <Icon name={name} size={20} color={focused ? colors.primary : "#666"} />
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{
          fontSize: 11,
          marginTop: 4,
          color: focused ? colors.primary : "#666",
          fontWeight: focused ? "700" : "600",
          textAlign: "center",
        }}
      >
        {label}
      </Text>
    </View>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 18,
          left: 20,
          right: 20,
          elevation: 6,
          backgroundColor: "#fff",
          borderRadius: 999,
          height: 60,
          paddingHorizontal: 14,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowOffset: { width: 0, height: 6 },
          shadowRadius: 12,
        },
        tabBarItemStyle: {
          alignItems: "center",
          justifyContent: "center",
          marginTop: 8,
          paddingHorizontal: 2, // small horizontal padding per item
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIconLabel name="home" label="Home" focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIconLabel name="phone" label="Contact" focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="More"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIconLabel name="grid" label="More" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
