import type { MetaDataResponseAPI } from "../mainAPI"

// ==================================================
//                   Get user
// ==================================================
export type UserGetAuthenticatedAPI = {
  metadata: MetaDataResponseAPI[]
  user: UserAuthenticated
}

export type TListUserResponseAPI = {
  metadata: MetaDataResponseAPI[]
  users: UserAuthenticated[]
  totalPages: number
  totalItems: number
  size: number
  number: number
  numberOfElements: number
}

export type UserAuthenticated = {
  id: number
  userId: number
  providerId: number
  username: string
  firstname: string
  middleName: string
  fathername: string
  mothername: string

  imageUrl: string
  email: string

  enterpriseId: number
  enterpriseRuc: string
  enterpriseName: string

  enterpriseImageUrl: string
  serverApiPath: string

  changePassword: boolean

  roles: TRoles[]
  privileges: TPrivileges[]
}

export type TRoles = {
  roleId: number
  enterpriseMenuId: number
  script: string
  defaultStatus: string
}

export type TPrivileges = {
  id: number
  name: string
  statusIds: string | number[]
}

export type TUpdateUserAPI = {
  metadata: MetaDataResponseAPI[]
  user: {
    email: string
  }
}
