import { useState } from "react"
import { getMessagesByRoomId } from "../services/Messages.services"

export const useMessages = () => {
  const [messages, setMessages] = useState([])

  const listMessages = async (id: number) => {
    const messages = await getMessagesByRoomId(id)
    setMessages(messages)
  }
  return {
    messages,
    listMessages,
  }
}
