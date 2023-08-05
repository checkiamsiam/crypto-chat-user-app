import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import BottomNavigator from "../navigator/BottomNavigator";
import AccountScreen from "../screens/Account/Screen";
import ChatScreen from "../screens/Chat/Screeen";
import IntroductionScreen from "../screens/Intruduction/Screen";
import LoginScreen from "../screens/Login/Screen";
import NotificationScreen from "../screens/Notification/Screen";
import ReferScreen from "../screens/Refer/Screen";
import SignupScreen from "../screens/SignUp/Screen";
import SplashScreen from "../screens/Splash/Screen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const [darkMode, setDarkMode] = useState(false);
  const [showSplashScreen, setshowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowSplashScreen(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        {showSplashScreen ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        ) : null}
        <Stack.Screen
          name="Introduction"
          component={IntroductionScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Refer"
          component={ReferScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
