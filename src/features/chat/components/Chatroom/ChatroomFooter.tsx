import { useState } from "react"
import { IoSendSharp } from "react-icons/io5"
import { useMessages } from "../../hooks/useMessages.hook"

interface IChatroomFooterProps {
  roomId: number
}

export const ChatroomFooter = (props: IChatroomFooterProps) => {
  const [message, setMessage] = useState("")
  const { createMessage } = useMessages()
  const { roomId } = props

  return (
    <div
      className="bg-gray-800 border-2 border-gray-700 min-h-[8vh] flex flex-row justify-between items-center gap-4"
      style={{ padding: 12 }}
    >
      <input
        placeholder="Digite sua mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        className={`w-full  rounded bg-[#101828] border "border-gray-700"
         text-gray-400`}
        style={{ padding: 8 }}
      />
      <IoSendSharp
        fontSize={28}
        onClick={() => createMessage(roomId, message)}
      />
    </div>
  )
}
