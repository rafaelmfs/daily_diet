import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Details } from "../screens/Details"
import { Feedback } from "../screens/Feedback"
import { Home } from "../screens/Home"
import { Login } from "../screens/Login"
import { Meal } from "../screens/Meal"
import { Overview } from "../screens/Overview"
import { Register } from "../screens/Register"

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator  screenOptions={{ headerShown: false }} initialRouteName="login">
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
        <Screen
          name="overview"
          component={Overview}
        />
        <Screen
          name="meal"
          component={Meal}
        />
        <Screen
          name="feedback"
          component={Feedback}
        />
        <Screen
          name="details"
          component={Details}
        />
    </Navigator>
)
}