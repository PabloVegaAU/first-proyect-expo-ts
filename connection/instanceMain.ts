import { BASE_URL_API } from "@/config/config"
import { USER_TOKEN_STORAGE } from "@/constants/constConfig"
import { getStorage } from "@/Services/storageServices"
import axios, { type AxiosInstance } from "axios"

const controllerInstance = new AbortController()

const instanceMain: AxiosInstance = axios.create({
  baseURL: BASE_URL_API,
  signal: controllerInstance.signal
})

instanceMain.interceptors.request.use(async (request) => {
  const token = await getStorage(USER_TOKEN_STORAGE)

  if (!token) return request

  request.headers.Authorization = `Bearer ${token}`

  return request
})

export { instanceMain }
