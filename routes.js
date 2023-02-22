import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./Screens/Auth/LoginScreen/LoginScreen";
import RegisterScreen from "./Screens/Auth/RegistrationScreen/RegistrationScreen";
import PostsScreen from "./Screens/Main/PostsScreen/PostsScreen";

const Auth = createNativeStackNavigator();
const HomeTabs = createBottomTabNavigator();

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
    <HomeTabs.Navigator>
      <HomeTabs.Screen name="Публикации" component={PostsScreen} />
    </HomeTabs.Navigator>
  );
};

export default routes;
