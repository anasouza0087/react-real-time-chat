import { useState } from "react"
import { useNavigate } from "react-router"
import { getMessagesByRoomId, postMessage } from "../services/Messages.services"
import { deleteLeaveRoom, postRoomInvite } from "../services/room.services"
import type { IMessage } from "../types"

export const useMessages = () => {
  const [messages, setMessages] = useState<IMessage[]>([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const navigate = useNavigate()

  const listMessages = async (roomId: number) => {
    const data = await getMessagesByRoomId(roomId, 1)

    setMessages(data)
    setPage(2)
  }

  const loadMoreMessages = async (roomId: number) => {
    if (!hasMore) return

    const olderMessages = await getMessagesByRoomId(roomId, page)

    if (olderMessages.length === 0) {
      setHasMore(false)
      return
    }

    setMessages((prev) => [...olderMessages, ...prev])
    setPage((prev) => prev + 1)
  }

  const createMessage = async (id: number, message: string) => {
    const newMessage = await postMessage(id, message)
    setMessages((prev) => [...prev, newMessage.content])
  }

  const inviteUser = async (roomId: number, userId: number) => {
    return await postRoomInvite(roomId, userId)
  }

  const leaveRoom = async (roomID: number) => {
    await deleteLeaveRoom(roomID)
    navigate("/rooms")
  }

  return {
    messages,
    listMessages,
    loadMoreMessages,
    createMessage,
    inviteUser,
    leaveRoom,
    setMessages,
    hasMore,
  }
}
