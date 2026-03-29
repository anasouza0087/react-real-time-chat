import { api } from "../../../shared"

interface ICreateRoom {
  room: {
    name: string
    description: string
  }
}

export const postRoom = async (room: ICreateRoom) => {
  const response = await api.post("/rooms", {
    ...room,
  })
  return response?.data
}

export const patchRoom = async (room: ICreateRoom, roomId: number) => {
  const response = await api.patch(`/rooms/${roomId}`, {
    ...room,
  })
  return response?.data
}

export const getRooms = async () => {
  const response = await api.get(`/rooms`)

  return response?.data
}

export const deleteRoom = async (id: number) => {
  const response = await api.delete(`/rooms/${id}`)
  return response?.data
}
