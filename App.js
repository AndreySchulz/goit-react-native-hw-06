import { useCallback, useState } from "react";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import * as Font from "expo-font";

import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import routes from "./routes";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoadingFonts, setIsLoadingFonts] = useState(false);
  const routing = routes({});
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Medium.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>{routing}</NavigationContainer>
    </View>
  );
}
