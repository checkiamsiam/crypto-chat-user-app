import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import ContractScreeen from "../screens/Contract/Screen";
import HomeScreen from "../screens/Home/Screen";
import ProfileScreen from "../screens/Profile/Screen";
import WalletScreen from "../screens/Wallet/Screen";
import { Colors } from "../theme/color";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        // BottomTabBarHeight:30,
        tabBarStyle: {
          position: "absolute",
          height: 60,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={25}
                color={focused ? Colors.primary : Colors.disable}
              />
            );
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={focused ? "md-wallet" : "md-wallet-outline"}
                size={25}
                color={focused ? Colors.primary : Colors.disable}
              />
            );
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="ContractScreeen"
        component={ContractScreeen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={focused ? "chatbubbles" : "chatbubbles-outline"}
                size={25}
                color={focused ? Colors.primary : Colors.disable}
              />
            );
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={25}
                color={focused ? Colors.primary : Colors.disable}
              />
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
