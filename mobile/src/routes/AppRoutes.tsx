import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useAuthUser } from "../context/UserContext"
import { Home } from "../screens/Home"
import { Login } from "../screens/Login"
import { Register } from "../screens/Register"

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  const { authToken } = useAuthUser()
  const initialRoute = authToken ? "home" : "login"

  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
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