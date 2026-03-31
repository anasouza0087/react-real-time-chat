export const MessageBubble = (props) => {
  const { direction, message } = props

  console.log(message)

  const onDirectionIn = () => {
    return (
      <div
        className="bg-indigo-800 text-white border border-gray-700 max-w-[25%] rounded-2xl h-20"
        style={{ padding: 12 }}
      >
        {message?.content}
        <p>{message?.created_at}</p>
      </div>
    )
  }

  const onDirectionOut = () => {
    return (
      <div
        className="bg-indigo-600 text-white border border-gray-700 max-w-[25%] rounded-2xl h-20"
        style={{ padding: 12 }}
      >
        {message?.content}
        <p>{message?.created_at}</p>
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
