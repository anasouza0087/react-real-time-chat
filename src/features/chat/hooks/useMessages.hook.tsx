import { useState } from "react"
import { getMessagesByRoomId, postMessage } from "../services/Messages.services"

export const useMessages = () => {
  const [messages, setMessages] = useState<any[]>([])

  const listMessages = async (id: number) => {
    const messages = await getMessagesByRoomId(id)
    setMessages(messages)
  }

  const createMessage = async (id: number, message: string) => {
    const newMessage = await postMessage(id, message)
    console.log(newMessage)
    setMessages([...messages, newMessage.content])
  }
  return {
    messages,
    listMessages,
    createMessage,
  }
}
