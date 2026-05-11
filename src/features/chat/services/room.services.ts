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

export const getRooms = async (page: number) => {
  const response = await api.get(`/rooms`, {
    params: { page },
  })

  return response?.data
}

export const deleteRoom = async (id: number) => {
  const response = await api.delete(`/rooms/${id}`)
  return response?.data
}

export const postRoomInvite = async (id: number, userId: number) => {
  const response = await api.post(`/rooms/${id}/invite`, {
    user_id: userId,
  })
  return response?.data
}

export const deleteLeaveRoom = async (roomID: number) => {
  const response = await api.delete(`/rooms/${roomID}/leave`)
  return response?.data
}
