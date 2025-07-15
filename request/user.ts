export type RegisterRequestService = {
  username: string
  password: string
  firstname: string
  lastname: string
  country: string
}

export type RegisterProviderRequestService = {
  userId: number
  username: string
  ruc: string
  providerId: number
}

export type TUpdateUserDataReq = {
  email: string
}

export type TUpdatePasswordReq = {
  typeChange?: string
  password: string
  passwordConfirmation?: string
}
