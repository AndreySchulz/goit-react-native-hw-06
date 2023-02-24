import { Camera, CameraType } from "expo-camera";
import { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Location from "expo-location";

import { styles } from "./CameraStyled";
const CameraScreen = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [camera, setCamera] = useState(null);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  const takePhoto = async () => {
    let cashPhoto = await camera.takePictureAsync();
    const photo = cashPhoto.uri;
    let CashLocation = await Location.getCurrentPositionAsync({});
    const location = CashLocation.coords;
    navigation.navigate("Создать публикацию", { photo, location });
  };

  useEffect(() => {
    requestPermission();
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
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
