import { PYTHON_SERVER_URL } from "@/config/config"
import axios, { type AxiosInstance } from "axios"

const controllerInstance = new AbortController()

const pythonServer: AxiosInstance = axios.create({
  baseURL: PYTHON_SERVER_URL,
  signal: controllerInstance.signal
})

pythonServer.interceptors.request.use(async (request) => {
  return request
})

export { pythonServer }
