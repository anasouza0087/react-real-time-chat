import { api } from "../../../shared"

export const getMessagesByRoomId = async (id: number) => {
  const response = await api.get(`/rooms/${id}/messages`)
  return response?.data
}

export const postMessage = async (id: number, message: string) => {
  const response = await api.post(`/rooms/${id}/messages`, {
    message: {
      content: message,
    },
  })
  return response?.data
}
