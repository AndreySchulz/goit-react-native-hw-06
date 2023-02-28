import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import { useDispatch } from "react-redux";
import { signIn } from "../../../redux/auth/authOperation";
import { styles } from "./LoginScreenStyled";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const submit = () => {
    Keyboard.dismiss();
    dispatch(signIn(state));
    setState(initialState);
  };

  return (
    <View style={styles.screen}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <ImageBackground
          source={require("../../../assets/images/photoBg.jpg")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            keyboardVerticalOffset={-250}
          >
            <View style={styles.container}>
              <Text style={styles.header}>Войти</Text>
              <View style={styles.form}>
                <TextInput
                  style={styles.formInput}
                  placeholder={"Адрес электронной почты"}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  value={state.email}
                />
                <TextInput
                  style={styles.formInput}
                  placeholder={"Пароль"}
                  secureTextEntry={true}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                  value={state.password}
                />

                <TouchableOpacity
                  style={styles.formButton}
                  activeOpacity={0.8}
                  onPress={submit}
                >
                  <Text style={styles.formButtonText}>Войти</Text>
                </TouchableOpacity>

                <Text
                  style={styles.fornLink}
                  onPress={() => {
                    navigation.navigate("Registration");
                  }}
                >
                  Нет аккаунта? Зарегистрироваться
                </Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default LoginScreen;
