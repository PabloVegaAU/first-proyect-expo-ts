import { AUTH_CHANGE_PASSWORD, AUTH_LOGIN } from "@/constants/apiPaths/auth"
import type { AuthResponseAPI } from "@/models"
import type { ChangePasswordRequestService, LoginRequestService } from "../request"
import { connection, instanceMain } from "@/connection"

const API = connection(instanceMain)

export const loginServices = async (body: LoginRequestService): Promise<AuthResponseAPI> => {
  const { data } = await API.post(AUTH_LOGIN, body)
  return data
}

export const changePassword = async (body: ChangePasswordRequestService): Promise<AuthResponseAPI> => {
  const { data } = await API.put(AUTH_CHANGE_PASSWORD, body)
  return data
}
