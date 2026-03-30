import { useParams, useLocation } from "react-router-dom"
import { MessagesHeader, MessagesList } from "../components"
import { useMessages } from "../hooks/useMessages.hook"
import { useEffect } from "react"

export const Messages = () => {
  const { id } = useParams()
  const location = useLocation()
  const { messages, listMessages } = useMessages()
  const roomNameFromState = location.state?.roomName

  useEffect(() => {
    listMessages(Number(id))
  }, [id])

  return (
    <div>
      <MessagesHeader room={roomNameFromState} />
      <MessagesList messages={messages} />
    </div>
  )
}
