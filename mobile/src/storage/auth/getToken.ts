import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH_TOKEN } from "../storageConfig";

export async function getToken() {
  try {
    const token = await AsyncStorage.getItem(AUTH_TOKEN)

    if (token) {
      return token
    }

    throw new Error("Usuário não autenticado")
  } catch (error) {
      throw error
  }
}