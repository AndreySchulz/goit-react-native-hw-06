import { useEffect, useState } from "react";
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
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";

const loadFonts = async () => {
  await Font.loadAsync({
    Roboto: require("./assets/fonts/Roboto-Medium.ttf"),
  });
};

export default function App() {
  const [activeKayboard, setActiveKeyboard] = useState(false);
  const [isLoadingFonts, setIsLoadingFonts] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setActiveKeyboard(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setActiveKeyboard(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  if (!isLoadingFonts) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsLoadingFonts(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          setActiveKeyboard(false);
        }}
      >
        <ImageBackground
          source={require("./assets/images/photoBg.jpg")}
          style={styles.image}
        >
          {/* <LoginScreen
            activeKayboard={activeKayboard}
            setActiveKeyboard={setActiveKeyboard}
          /> */}
          <RegistrationScreen
            activeKayboard={activeKayboard}
            setActiveKeyboard={setActiveKeyboard}
          />
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
});
