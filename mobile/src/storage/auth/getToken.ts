import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH_TOKEN } from "../storageConfig";

export async function getToken() {
  try {
    const token = await AsyncStorage.getItem(AUTH_TOKEN)

    return token
  } catch (error) {
    throw error
  }
}