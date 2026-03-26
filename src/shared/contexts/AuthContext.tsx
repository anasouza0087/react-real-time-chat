import { createContext } from "react"

export type User = {
  id: number
  name: string
  username: string
}

export type AuthContextType = {
  user: User | null
  loading: boolean
  logout: () => void
}

export const AuthContext = createContext({} as AuthContextType)
