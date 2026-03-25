import { api } from "../../../shared"

interface IUserBody {
  user: {
    name: string
    username: string
    password: string
  }
}

export const login = async (username: string, password: string) => {
  const response = await api.post("/login", {
    username,
    password,
  })
  localStorage.setItem("token", response?.data?.token)
  return response?.data
}

export const createUser = async (user: IUserBody) => {
  const response = await api.post("/users", {
    ...user,
  })
  return response?.data
}
