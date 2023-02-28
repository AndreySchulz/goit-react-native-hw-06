import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { onSnapshot, collection, query } from "firebase/firestore";
import { db } from "../../../firebase/config";
import Feather from "react-native-vector-icons/Feather";
import { styles } from "./PostsScreenStyled";

import { useEffect, useState } from "react";

const PostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"));
    const unsub = onSnapshot(q, (data) => {
      const fetchedPosts = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPosts(fetchedPosts);
    });
  }, []);
  console.log(posts);
  return (
    <View style={styles.container}>
      {/* <View style={styles.userInfo}>
        <Image source={{ uri: userData.avatar }} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.email}>{userData.email}</Text>
        </View>
      </View> */}
      {!!posts.length && (
        <FlatList
          data={posts}
          keyExtractor={(item, idx) => idx}
          renderItem={({ item }) => (
            <View style={styles.post}>
              <Image source={{ uri: item.photoURL }} style={styles.postImg} />
              <Text style={styles.title}>{item.postName}</Text>
              <View style={styles.descrContainer}>
                <Pressable
                  style={styles.commentsBtn}
                  onPress={() =>
                    navigation.navigate("Комментарии", {
                      postId: item.id,
                      imgURL: item.photoURL,
                      // avatarURL: userData.avatar,
                    })
                  }
                >
                  <Feather name="message-circle" color={"#BDBDBD"} size={24} />
                  <Text style={styles.commentsCount}>{item.commentsCount}</Text>
                </Pressable>
                <View>
                  <Pressable
                    style={{ flexDirection: "row" }}
                    onPress={() => navigation.navigate("Карта", item.location)}
                  >
                    <Feather name="map-pin" color={"#BDBDBD"} size={24} />
                    <Text style={styles.location}>{item.locationDesc}</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};
//
export default PostsScreen;
