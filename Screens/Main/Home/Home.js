import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import PostsScreen from "../PostsScreen/PostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";

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
} from "react-native";
import { Feather } from "@expo/vector-icons";

const HomeTabs = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <HomeTabs.Navigator tabBarOptions={{ showLabel: false }}>
      <HomeTabs.Screen
        name="Публикации"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="grid" size={size} color={color} />
          ),
        }}
      />
      <HomeTabs.Screen
        name="Создать публикацию"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="plus" size={size} color={color} />
          ),
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
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
        }}
      />
    </HomeTabs.Navigator>
  );
};

export default Home;
