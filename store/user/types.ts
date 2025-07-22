import type { UserAuthenticated } from "@/models"

export type TUserInitialState = {
  user: UserAuthenticated | null
  token: string
  isLoading: boolean
  error: string
}

export type TUserState = TUserInitialState & {
  setLoading: (isLoading: boolean) => void
  setUser: (user: UserAuthenticated | null) => void
  setError: (error: string) => void
  setToken: (token: string) => void
  setIsLoading: (isLoading: boolean) => void
}