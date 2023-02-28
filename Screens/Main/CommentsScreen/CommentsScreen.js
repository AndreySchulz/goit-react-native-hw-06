import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import { useSelector } from "react-redux";
import { db } from "../../../firebase/config";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
  collectionGroup,
} from "firebase/firestore";
import { styles } from "./CommentsScreenStyled";

const CommentsScreen = ({ route }) => {
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const nickname = useSelector((state) => state.auth.displayName);
  const { postId, photoURL } = route.params;

  useEffect(() => {
    const q = query(
      collection(db, "posts", postId, "comments"),
      orderBy("dateTime")
    );
    const unsub = onSnapshot(q, (data) => {
      const fetchedComments = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setAllComments(fetchedComments);
      Keyboard.dismiss();
    });

    return () => unsub();
  }, []);

  async function sendComment() {
    const postToUpdateRef = collectionGroup(db, "posts", postId, "comments");

    await addDoc(postToUpdateRef, {
      nickname,
      comment,

      dateTime: new Date(),
    });

    setComment("");
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Image source={{ uri: photoURL }} style={styles.image} />
        <FlatList
          data={allComments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.commentBox}>
              <Image source={{ uri: avatarURL }} style={styles.avatar} />
              <View style={styles.messageBox}>
                <Text style={styles.message}>{item.comment}</Text>
                <Text style={styles.date}>
                  {dateFormatter(item.dateTime.seconds)}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={{ paddingTop: 8 }}>
        <TextInput
          style={styles.input}
          value={comment}
          placeholder="Комментировать..."
          placeholderTextColor={"#BDBDBD"}
          onChangeText={(text) => setComment(text)}
        />

        <Pressable style={styles.sendBtn} onPress={sendComment}>
          <Octicons name="arrow-up" size={20} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
};

export default CommentsScreen;
