import AsyncStorage from "@react-native-async-storage/async-storage"
import { AUTH_TOKEN } from "../storageConfig"

export async function removeToken() {
  try {
    await AsyncStorage.removeItem(AUTH_TOKEN)
  } catch (error) {
    throw error
  }
}