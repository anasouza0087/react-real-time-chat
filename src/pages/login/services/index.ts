import { api } from "../../../shared"

export const Login = async (username: string, password: string) => {
  const response = await api.post("/login", {
    username,
    password,
  })
  return response?.data
}
