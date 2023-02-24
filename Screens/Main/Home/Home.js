import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import PostsScreen from "../PostsScreen/PostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import { styles } from "./HomeStyled";

const HomeTabs = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <HomeTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FF6C00",
        tabBarStyle: styles.tabBar,
        headerRightContainerStyle: styles.exitBtn,

        tabBarShowLabel: false,
      }}
    >
      <HomeTabs.Screen
        name="Публикации"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="grid" size={size} color={color} />
          ),
          headerRight: () => (
            <Ionicons
              name="exit-outline"
              size={24}
              color="black"
              onPress={() => alert("This is a button!")}
            />
          ),
        }}
      />
      <HomeTabs.Screen
        name="Создать публикацию"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="plus" size={size} color={"#FFFFFF"} />
          ),

          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={styles.addBtn}
              onPress={() => {
                navigation.navigate("Создать публикацию");
              }}
            />
          ),
        }}
      />
      <HomeTabs.Screen
        name="Профиль"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),

          headerRight: () => (
            <Ionicons
              name="exit-outline"
              size={24}
              color="black"
              onPress={() => alert("This is a button!")}
            />
          ),
        }}
      />
    </HomeTabs.Navigator>
  );
};

export default Home;
