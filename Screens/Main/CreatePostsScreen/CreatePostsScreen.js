import { Camera, CameraType } from "expo-camera";
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
  Button,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./CreatePostsScreenStyled";
const CreatePostsScreen = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isActiveCamera, setIsactiveCamera] = useState(false);
  const [photo, setPhoto] = useState(null);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  const takePhoto = async () => {
    console.log(photo.takePictureAsync());
    setIsactiveCamera(false);
  };

  return (
    <View style={styles.container}>
      {!isActiveCamera ? (
        <View style={styles.form}>
          <TouchableOpacity
            onPress={() => {
              requestPermission();
              if (permission.granted) {
                setIsactiveCamera(true);
              }
            }}
          >
            <Text>{photo ? "Редактировать фото" : "Загрузите фото"}</Text>
          </TouchableOpacity>
          <TextInput></TextInput>
          <TextInput></TextInput>
          <TouchableOpacity>
            <TextInput>Опубликовать</TextInput>
          </TouchableOpacity>
        </View>
      ) : (
        <Camera style={styles.camera} type={type} ref={setPhoto}>
          <View style={styles.cameraBtnBox}>
            <TouchableOpacity
              style={styles.cameraBtn}
              onPress={takePhoto}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.togleCameraBtn}
              onPress={toggleCameraType}
            >
              <MaterialIcons
                name="flip-camera-android"
                size={24}
                color="#ffff"
              />
            </TouchableOpacity>
          </View>
        </Camera>
      )}
    </View>
  );
};

export default CreatePostsScreen;
