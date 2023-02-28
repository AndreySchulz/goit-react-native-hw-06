import { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";

import { Feather } from "@expo/vector-icons";
import { styles } from "./CreatePostsScreenStyled";
import { db, storage } from "../../../firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useSelector } from "react-redux";
import { getUser } from "../../../redux/auth/authSelector";
import { addDoc, collection } from "firebase/firestore";

const CreatePostsScreen = ({ navigation, route }) => {
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [label, setLabel] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(false);

  const { uid, displayName } = useSelector(getUser);

  const submitForm = async () => {
    const responce = await (await fetch(photo)).blob();
    const postId = Date.now().toString();
    const storageRef = ref(storage, `postImages/${postId}`);
    await uploadBytes(storageRef, responce);
    const photoURL = await getDownloadURL(storageRef);

    await addDoc(collection(db, "posts"), {
      uid,
      displayName,
      photoURL,
      label,
      location,
    });

    setPhoto(null);

    navigation.navigate("Публикации");
  };
  // useEffect(() => {
  //   if (form.label && form.photo) {
  //     setDisabledBtn(false);
  //   }
  // }, [form]);

  useEffect(() => {
    if (!route.params) {
      return;
    }
    if (route.params.location) {
      setLocation(route.params.location);
    }
    setPhoto(route.params.photo);
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
          onChangeText={(value) => setLabel(value)}
          value={label}
          style={styles.input}
        ></TextInput>
        <TouchableOpacity
          style={styles.input}
          activeOpacity={0.9}
          onPress={() => {
            navigation.navigate("Карта", location);
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
            // setForm(initialState);
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
