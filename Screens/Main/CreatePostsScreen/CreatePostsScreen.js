import { Camera, CameraType } from "expo-camera";
import { useState, useEffect } from "react";
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
  Button,
  Image,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { styles } from "./CreatePostsScreenStyled";

const initialState = {
  photo: "",
  label: "",
  location: "",
};

const CreatePostsScreen = ({ navigation, route }) => {
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [form, setForm] = useState(initialState);
  const [disabledBtn, setDisabledBtn] = useState(true);

  const submitForm = () => {
    console.log(form);
    setForm(initialState);
    setPhoto(null);
    // navigation.navigate("Публикации");
  };
  useEffect(() => {
    if (form.label && form.photo) {
      setDisabledBtn(false);
    }
  }, [form]);

  useEffect(() => {
    if (!route.params) {
      return;
    }
    if (route.params.location) {
      setLocation(route.params.location);
      setForm((prevState) => ({
        ...prevState,
        location: route.params.location,
      }));
    }
    setPhoto(route.params.photo);
    setForm((prevState) => ({ ...prevState, photo: route.params.photo }));
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TouchableOpacity
          style={styles.TapPhotoBox}
          onPress={() => {
            navigation.navigate("Camera");
          }}
        >
          <View style={styles.photoBox}>
            {photo ? (
              <Image source={{ uri: photo }} style={styles.image}></Image>
            ) : (
              <View style={styles.photoBoxIcon}>
                <Feather name="camera" size={24} color="#BDBDBD" />
              </View>
            )}
          </View>

          <Text style={styles.labelPhoto}>
            {photo ? "Редактировать фото" : "Загрузите фото"}
          </Text>
        </TouchableOpacity>
        <TextInput
          placeholder={"Название..."}
          onChangeText={(value) =>
            setForm((prevState) => ({
              ...prevState,
              label: value,
            }))
          }
          value={form.label}
          style={styles.input}
        ></TextInput>
        <TouchableOpacity
          style={styles.input}
          activeOpacity={0.9}
          onPress={() => {
            navigation.navigate("Карта", { location });
          }}
        >
          <Feather name="map-pin" size={24} color="#BDBDBD" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.confirmBtn,
            backgroundColor: disabledBtn ? "#F6F6F6" : "#FF6C00",
          }}
          onPress={submitForm}
          disabled={disabledBtn}
        >
          <Text style={{ color: disabledBtn ? "#BDBDBD" : "#FFFFFF" }}>
            Опубликовать
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomBox}>
        <TouchableOpacity
          style={styles.deleteBtn}
          onPress={() => {
            setForm(initialState);
            setPhoto(null);
          }}
        >
          <Feather name="trash-2" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatePostsScreen;
