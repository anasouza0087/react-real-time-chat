import { format } from "date-fns"
import type { IMessage } from "../../types"

interface IMessageBubbleProps {
  direction: "out" | "in"
  message: IMessage
}

export const MessageBubble = (props: IMessageBubbleProps) => {
  const { direction, message } = props

  const formatDate = (dateISO: string) => {
    return format(new Date(dateISO), "dd/MM/yy - HH:mm")
  }
  const onDirectionIn = () => {
    return (
      <div
        className="bg-indigo-800 text-white border border-gray-700 min-w-[10%] max-w-[25%] rounded-2xl flex flex-col justify-between gap-1"
        style={{ padding: 12 }}
      >
        <h1 className="font-bold text-gray-600">{message?.user?.username}</h1>
        <p className="text-justify">{message?.content}</p>
        <p className="text-[12px] font-extralight">
          {formatDate(message?.created_at)}
        </p>
      </div>
    )
  }

  const onDirectionOut = () => {
    return (
      <div
        className="bg-indigo-600 text-white border border-gray-700  min-w-[10%] max-w-[25%] rounded-2xl flex flex-col justify-between gap-1"
        style={{ padding: 12 }}
      >
        <h1 className="font-bold text-gray-600">{message?.user?.username}</h1>
        <p className="text-justify" style={{ paddingLeft: 8 }}>
          {message?.content}
        </p>
        <p className="text-[12px] font-extralight text-right">
          {formatDate(message?.created_at)}
        </p>
      </div>
    )
  }

  return (
    <div
      className={`w-full flex ${direction == "in" ? "justify-start" : "justify-end"}`}
    >
      {direction == "in" ? onDirectionIn() : onDirectionOut()}
    </div>
  )
}
