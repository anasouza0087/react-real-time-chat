import { useState } from "react"
import { getMessagesByRoomId, postMessage } from "../services/Messages.services"
import { postRoomInvite } from "../services/room.services"

export const useMessages = () => {
  const [messages, setMessages] = useState<any[]>([])

  const listMessages = async (id: number) => {
    const messages = await getMessagesByRoomId(id)
    setMessages(messages)
  }

  const createMessage = async (id: number, message: string) => {
    const newMessage = await postMessage(id, message)
    setMessages([...messages, newMessage.content])
  }

  const inviteUser = async (roomId: number, userId: number) => {
    const invitation = await postRoomInvite(roomId, userId)
    console.log(invitation)
  }

  return {
    messages,
    listMessages,
    createMessage,
    inviteUser,
  }
}
