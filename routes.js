import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./Screens/Auth/LoginScreen/LoginScreen";
import RegisterScreen from "./Screens/Auth/RegistrationScreen/RegistrationScreen";
import Home from "./Screens/Main/Home/Home";
import CreatePostsScreen from "./Screens/Main/CreatePostsScreen/CreatePostsScreen";
import CommentsScreen from "./Screens/Main/CommentsScreen/CommentsScreen";

const Stack = createNativeStackNavigator();

const routes = (isAuth) => {
  if (!isAuth) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Registration"
          options={{ headerShown: false }}
          component={RegisterScreen}
        />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={Home}
      />
      <Stack.Screen name="Создать публикацию" component={CreatePostsScreen} />
      <Stack.Screen name="Комментарии" component={CommentsScreen} />
    </Stack.Navigator>
  );
};

export default routes;
