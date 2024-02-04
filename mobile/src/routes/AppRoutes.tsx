import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../screens/Home"
import { Login } from "../screens/Login"
import { Register } from "../screens/Register"

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="login">
        <Screen
          name="login"
          component={Login}
        />
        <Screen
          name="register"
          component={Register}
        />
        <Screen
          name="home"
          component={Home}
        />
    </Navigator>
)
}