import { useAuth } from "../../../../shared"
import { MessageBubble } from "./MessageBubble"

export const MessagesList = (props) => {
  const { messages } = props
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
            console.log(message)
            return (
              <MessageBubble
                direction={messageDirection}
                message={message}
              />
            )
          })}
        </>
      )}
    </div>
  )
}
