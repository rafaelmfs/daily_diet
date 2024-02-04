import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { UserContextProvider } from "../context/UserContext";
import { AppRoutes } from "./AppRoutes";

export function Routes() {
  return (
    <UserContextProvider>
      <View style={{
        flex: 1,
      }}>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </View>
    </UserContextProvider>
  )
}