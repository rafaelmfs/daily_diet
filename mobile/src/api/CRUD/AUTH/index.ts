import { AxiosResponse } from "axios"
import { api } from "../../axios"

interface RegisterParams{
  name: string,
	login: string,
	password: string
}

type LoginParams = Omit<RegisterParams, "name">


export async function register(data: RegisterParams): Promise<void> {
  try {
    const registerResponse:AxiosResponse = await api.post('/user', data)
    
    if (registerResponse.status != 201) {
      throw new Error("Falha ao cadastrar usuário!")
    }
  } catch (error) {
    throw error
  }
}

export async function login(data: LoginParams) {
  try {
    const loginResponse: AxiosResponse<{ auth: string }> = await api.post('/login', data)

    if (loginResponse.status == 200) {
      const { auth } = loginResponse.data
      return auth
    }
  } catch (error) {
    throw error
  }
}