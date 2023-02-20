import { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { styles } from "./LoginScreen.styled";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = ({ activeKayboard, setActiveKeyboard }) => {
  const [state, setState] = useState(initialState);

  const submit = () => {
    setActiveKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height - 100px"}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Войти</Text>
        <View
          style={{
            ...styles.form,
            marginBottom: activeKayboard ? 145 : 145,
          }}
        >
          <TextInput
            style={styles.formInput}
            placeholder={"Адрес электронной почты"}
            onFocus={() => {
              setActiveKeyboard(true);
            }}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, email: value }))
            }
            value={state.email}
          />
          <TextInput
            style={styles.formInput}
            placeholder={"Пароль"}
            secureTextEntry={true}
            onFocus={() => {
              setActiveKeyboard(true);
            }}
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

          <Text style={styles.fornLink}>Нет аккаунта? Зарегистрироваться</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
