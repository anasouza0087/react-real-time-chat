import { api } from "../../../shared"

export const getUsers = async (query: unknown) => {
  const response = await api.get(`/users`, {
    params: { query },
  })

  return response?.data
}
