import axios from "axios";

const server = process.env.EXPO_PUBLIC_API_URL
const serverPort = process.env.EXPO_PUBLIC_API_PORT

export const api = axios.create({
  baseURL: `${server}:${serverPort}`
})

export function configAuthAPI(token: string){
  api.interceptors.request.use(
    (config) => {
      config.headers.Authorization = token
      return config
    },
    (error: any) => {
      return Promise.reject(error)
    },
  )
}