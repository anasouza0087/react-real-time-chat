import { useEffect } from "react"
import { useAuth } from "../../../../shared"
import { MessageBubble } from "./MessageBubble"
import { createCable } from "../../../../shared/services/cable"

export const MessagesList = (props) => {
  const { messages, roomId, setMessages } = props
  const { user } = useAuth()

  const emptyListOfMessages = () => {
    return (
      <div
        className="w-full  flex flex-col justify-between items-center"
        style={{ marginTop: 200 }}
      >
        <h1 className="font-bold text-gray-400">Nenhuma mensagem ainda</h1>
        <p className="font-light text-gray-500">
          Seja o primeiro a enviar uma mensagem!
        </p>
      </div>
    )
  }

  useEffect(() => {
    if (!roomId) return

    const cable = createCable()

    const subscription = cable.subscriptions.create(
      { channel: "RoomChannel", room_id: roomId },
      {
        connected() {
          console.log("Conectado na sala", roomId)
        },

        received(data) {
          setMessages((prev) => {
            const exists = prev.some((msg) => msg.id === data.id)
            if (exists) return prev

            return [...prev, data]
          })
        },
      },
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [roomId])

  return (
    <div
      className="h-full flex flex-col justify-start gap-2"
      style={{ padding: 16 }}
    >
      {messages?.length == 0 ? (
        emptyListOfMessages()
      ) : (
        <>
          {messages.map((message) => {
            const messageDirection = message.user_id == user?.id ? "out" : "in"
            return (
              <MessageBubble direction={messageDirection} message={message} />
            )
          })}
        </>
      )}
    </div>
  )
}
