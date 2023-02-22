import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import PostsScreen from "../PostsScreen/PostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";

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
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";

const HomeTabs = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <HomeTabs.Navigator>
      <HomeTabs.Screen name="Публикации" component={PostsScreen} />
      <HomeTabs.Screen
        name="Создать публикацию"
        component={CreatePostsScreen}
        options={{
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
      <HomeTabs.Screen name="Профиль" component={ProfileScreen} />
    </HomeTabs.Navigator>
  );
};

export default Home;
