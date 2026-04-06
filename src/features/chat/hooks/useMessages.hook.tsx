import { useState } from "react"
import { getMessagesByRoomId, postMessage } from "../services/Messages.services"
import { deleteLeaveRoom, postRoomInvite } from "../services/room.services"
import { useNavigate } from "react-router"

export const useMessages = () => {
  const [messages, setMessages] = useState<any[]>([])
  const navigate = useNavigate()

  const listMessages = async (id: number) => {
    const messages = await getMessagesByRoomId(id)
    setMessages(messages)
  }

  const createMessage = async (id: number, message: string) => {
    const newMessage = await postMessage(id, message)
    setMessages([...messages, newMessage.content])
  }

  const inviteUser = async (roomId: number, userId: number) => {
    return await postRoomInvite(roomId, userId)
  }

  const leaveRoom = async (roomID: number) => {
    await deleteLeaveRoom(roomID).then(() => navigate("/rooms"))
  }

  return {
    messages,
    listMessages,
    createMessage,
    inviteUser,
    leaveRoom,
  }
}
