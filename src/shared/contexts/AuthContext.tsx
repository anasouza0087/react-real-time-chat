import { createContext } from "react"

export type User = {
  id: number
  email: string
}

export type AuthContextType = {
  user: User | null
  loading: boolean
  logout: () => void
}

export const AuthContext = createContext({} as AuthContextType)