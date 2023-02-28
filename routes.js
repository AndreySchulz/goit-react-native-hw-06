import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./Screens/Auth/LoginScreen/LoginScreen";
import RegisterScreen from "./Screens/Auth/RegistrationScreen/RegistrationScreen";
import Home from "./Screens/Main/Home/Home";
import CreatePostsScreen from "./Screens/Main/CreatePostsScreen/CreatePostsScreen";
import CommentsScreen from "./Screens/Main/CommentsScreen/CommentsScreen";
import CameraScreen from "./Screens/Main/Camera/Camera";
import MapScreen from "./Screens/Main/MapScreen/MapScreen";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/auth/authSelector";
import { authState } from "./redux/auth/authOperation";
import { useEffect } from "react";
import { auth } from "./firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { refreshState } from "./redux/auth/authReducer";

const Stack = createNativeStackNavigator();

const Routes = () => {
  const userData = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userData) {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          return;
        }

        const userData = {
          accessToken: user.accessToken,
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
        };
        dispatch(refreshState(userData));
      });
    }
  }, []);

  if (!userData) {
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
          options={{ headerShown: false, gestureDirection: "vertical" }}
          component={RegisterScreen}
        />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: "black",
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
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          headerShown: false,
          gestureDirection: "vertical",
        }}
      />
      <Stack.Screen name="Комментарии" component={CommentsScreen} />
      <Stack.Screen name="Карта" component={MapScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
