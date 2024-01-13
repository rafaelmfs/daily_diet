import AsyncStorage from "@react-native-async-storage/async-storage"
import { AUTH_TOKEN } from "../storageConfig"

export async function addTokenInStorage(token: string) {
  try {
    await AsyncStorage.setItem(AUTH_TOKEN, token)
    
  } catch (error) {
    throw error
  }
}