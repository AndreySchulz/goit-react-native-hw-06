import { useState } from "react";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import routes from "./routes";

const loadFonts = async () => {
  await Font.loadAsync({
    Roboto: require("./assets/fonts/Roboto-Medium.ttf"),
  });
};

export default function App() {
  const [isLoadingFonts, setIsLoadingFonts] = useState(false);
  const routing = routes({});

  if (!isLoadingFonts) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsLoadingFonts(true)}
        onError={console.warn}
      />
    );
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
