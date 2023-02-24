import { Camera, CameraType } from "expo-camera";
import { useEffect, useState } from "react";
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

import { styles } from "./CameraStyled";
const CameraScreen = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  const takePhoto = async () => {
    const cashPhoto = await camera.takePictureAsync();
    const photo = cashPhoto.uri;
    navigation.navigate("Создать публикацию", { photo });
  };
  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={setCamera}>
        <View style={styles.cameraBtnBox}>
          <TouchableOpacity
            style={styles.cameraBtn}
            onPress={takePhoto}
          ></TouchableOpacity>
          <TouchableOpacity
            style={styles.togleCameraBtn}
            onPress={toggleCameraType}
          >
            <MaterialIcons name="flip-camera-android" size={24} color="#ffff" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraScreen;
