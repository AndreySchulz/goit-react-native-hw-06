import { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AppLoading from "expo-app-loading";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegisterScreen from "./Screens/RegistrationScreen/RegistrationScreen";

const loadFonts = async () => {
  await Font.loadAsync({
    Roboto: require("./assets/fonts/Roboto-Medium.ttf"),
  });
};

export default function App() {
  const [isLoadingFonts, setIsLoadingFonts] = useState(false);

  if (!isLoadingFonts) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsLoadingFonts(true)}
        onError={console.warn}
      />
    );
  }

  return <RegisterScreen />;
}
