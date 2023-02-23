import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./Screens/Auth/LoginScreen/LoginScreen";
import RegisterScreen from "./Screens/Auth/RegistrationScreen/RegistrationScreen";
import Home from "./Screens/Main/Home/Home";
import CreatePostsScreen from "./Screens/Main/CreatePostsScreen/CreatePostsScreen";
import CommentsScreen from "./Screens/Main/CommentsScreen/CommentsScreen";

const Auth = createNativeStackNavigator();

const routes = (isAuth) => {
  if (!isAuth) {
    return (
      <Auth.Navigator>
        <Auth.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
          component={LoginScreen}
        />
        <Auth.Screen
          name="Registration"
          options={{ headerShown: false }}
          component={RegisterScreen}
        />
      </Auth.Navigator>
    );
  }
  return (
    <Auth.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Auth.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={Home}
      />
      <Auth.Screen name="Создать публикацию" component={CreatePostsScreen} />
      <Auth.Screen name="Комментарии" component={CommentsScreen} />
    </Auth.Navigator>
  );
};

export default routes;
