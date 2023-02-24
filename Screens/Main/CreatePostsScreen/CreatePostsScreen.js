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
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { styles } from "./CreatePostsScreenStyled";
const CreatePostsScreen = ({ navigation, route }) => {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (!route.params) {
      return;
    }
    setPhoto(route.params.photo);
    console.log(route.params.photo);
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

          <Text>{photo ? "Редактировать фото" : "Загрузите фото"}</Text>
        </TouchableOpacity>
        <TextInput placeholder={"Название..."}></TextInput>
        <TextInput>
          <Feather name="map-pin" size={24} color="#BDBDBD" />
        </TextInput>
        <TouchableOpacity style={styles.confirmBtn}>
          <Text style={styles.confirmBtnText}>Опубликовать</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatePostsScreen;
