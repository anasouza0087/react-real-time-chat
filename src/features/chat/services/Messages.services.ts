import { api } from "../../../shared"

export const getMessagesByRoomId = async (id: number) => {
  const response = await api.get(`/rooms/${id}/messages`)
  return response?.data
}
