import { useParams, useLocation } from "react-router-dom"
import { MessageFooter, MessagesHeader, MessagesList } from "../components"
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
    <div className="h-screen flex flex-col">
      <MessagesHeader room={roomNameFromState} />

      <div className="flex-1 overflow-y-auto">
        <MessagesList messages={messages} />
      </div>

      <MessageFooter roomId={id} />
    </div>
  )
}
