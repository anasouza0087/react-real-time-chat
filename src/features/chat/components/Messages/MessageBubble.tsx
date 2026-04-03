import { format } from "date-fns"

export const MessageBubble = (props) => {
  const { direction, message } = props

  const formatDate = (dateISO: string) => {
    return format(new Date(dateISO), "dd/MM/yy - HH:mm")
  }
  const onDirectionIn = () => {
    return (
      <div
        className="bg-indigo-800 text-white border border-gray-700 max-w-[25%] rounded-2xl h-20"
        style={{ padding: 12 }}
      >
        <p>{message?.content}</p>
        <p className="text-[12px] font-extralight">
          {formatDate(message?.created_at)}
        </p>
      </div>
    )
  }

  const onDirectionOut = () => {
    return (
      <div
        className="bg-indigo-600 text-white border border-gray-700 max-w-[25%] rounded-2xl h-20"
        style={{ padding: 12 }}
      >
        <p>{message?.content}</p>
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
