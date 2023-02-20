import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { styles } from "./RegistrationScreen.styled";
const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = ({ activeKayboard, setActiveKeyboard }) => {
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
        <TouchableOpacity
          style={styles.userPhoto}
          activeOpacity={0.8}
        ></TouchableOpacity>

        <Text style={styles.header}>Регистрация</Text>
        <View
          style={{
            ...styles.form,
            marginBottom: activeKayboard ? 79 : 79,
          }}
        >
          <TextInput
            style={styles.formInput}
            placeholder={"Логин"}
            onFocus={() => {
              setActiveKeyboard(true);
            }}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, login: value }))
            }
            value={state.login}
          />
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
            <Text style={styles.formButtonText}>Зарегистрироваться</Text>
          </TouchableOpacity>

          <Text style={styles.fornLink}>Уже есть аккаунт? Войти</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;
