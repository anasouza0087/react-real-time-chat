import { api } from "../../../shared"

export const getUsers = async (query) => {
  const response = await api.get(`/users`, {
    params: { query },
  })

  return response?.data
}
