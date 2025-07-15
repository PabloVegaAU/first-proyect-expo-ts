import type { MetaDataResponseAPI } from "../mainAPI"
import type { UserAuthenticated } from "../user"

export type AuthResponseAPI = {
  metadata: MetaDataResponseAPI[]
  token: string
  user: UserAuthenticated
}
