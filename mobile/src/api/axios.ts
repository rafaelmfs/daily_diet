import axios from "axios";

export const api = axios.create({
  baseURL: 'http://192.168.18.100:3333'
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