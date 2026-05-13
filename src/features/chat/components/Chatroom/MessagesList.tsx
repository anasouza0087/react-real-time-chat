// import {
//   useEffect,
//   useRef,
//   useState,
//   type Dispatch,
//   type SetStateAction,
// } from "react"
// import { useAuth } from "../../../../shared"
// import { MessageBubble } from "./MessageBubble"
// import { createCable } from "../../../../shared/services/cable"
// import type { IMessage } from "../../types"

// interface IMessagesListProps {
//   messages: IMessage[]
//   roomId: number
//   setMessages: Dispatch<SetStateAction<IMessage[]>>
//   loadMoreMessages: (roomId: number) => Promise<void>
// }

// export const MessagesList = ({
//   messages,
//   roomId,
//   setMessages,
//   loadMoreMessages,
// }: IMessagesListProps) => {
//   const { user } = useAuth()
//   const initialScrollDone = useRef(false)

//   const containerRef = useRef<HTMLDivElement>(null)
//   const loadingRef = useRef(false)

//   const [loadingMore, setLoadingMore] = useState(false)

//   const handleScroll = async () => {
//     const container = containerRef.current

//     if (!container || loadingRef.current) return

//     const reachedTop = container.scrollTop <= 10

//     if (reachedTop) {
//       loadingRef.current = true
//       setLoadingMore(true)

//       try {
//         await loadMoreMessages(roomId)
//       } finally {
//         loadingRef.current = false
//         setLoadingMore(false)
//       }
//     }
//   }

//   const emptyListOfMessages = () => {
//     return (
//       <div
//         className="w-full flex flex-col justify-between items-center"
//         style={{ marginTop: 200 }}
//       >
//         <h1 className="font-bold text-gray-400">Nenhuma mensagem ainda</h1>
//         <p className="font-light text-gray-500">
//           Seja o primeiro a enviar uma mensagem!
//         </p>
//       </div>
//     )
//   }

//   useEffect(() => {
//     const container = containerRef.current

//     if (!container || messages.length === 0) return

//     if (!initialScrollDone.current) {
//       container.scrollTop = container.scrollHeight
//       initialScrollDone.current = true
//     }
//   }, [messages.length, roomId])

//   useEffect(() => {
//     initialScrollDone.current = false
//   }, [roomId])

//   useEffect(() => {
//     if (!roomId) return

//     const cable = createCable()

//     const subscription = cable.subscriptions.create(
//       { channel: "RoomChannel", room_id: roomId },
//       {
//         connected() {
//           console.log("Conectado na sala", roomId)
//         },

//         received(data: IMessage) {
//           setMessages((prev) => {
//             const exists = prev.some((msg) => msg.id === data.id)

//             if (exists) return prev

//             return [...prev, data]
//           })
//         },
//       },
//     )

//     return () => {
//       subscription.unsubscribe()
//     }
//   }, [roomId, setMessages])

//   return (
//     <div
//       ref={containerRef}
//       onScroll={handleScroll}
//       className="h-full overflow-y-auto container-scroll flex flex-col gap-2"
//       style={{ padding: 16 }}
//     >
//       {loadingMore && (
//         <p className="text-center text-gray-400 text-sm">
//           Carregando mensagens antigas...
//         </p>
//       )}

//       {messages.length === 0
//         ? emptyListOfMessages()
//         : messages.map((message) => {
//             const direction = message.user_id === user?.id ? "out" : "in"

//             return (
//               <MessageBubble
//                 key={message.id}
//                 direction={direction}
//                 message={message}
//               />
//             )
//           })}
//     </div>
//   )
// }

import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react"
import { useAuth } from "../../../../shared"
import { MessageBubble } from "./MessageBubble"
import { createCable } from "../../../../shared/services/cable"
import type { IMessage } from "../../types"

interface IMessagesListProps {
  messages: IMessage[]
  roomId: number
  setMessages: Dispatch<SetStateAction<IMessage[]>>
  loadMoreMessages: (roomId: number) => Promise<void>
}

export const MessagesList = ({
  messages,
  roomId,
  setMessages,
  loadMoreMessages,
}: IMessagesListProps) => {
  const { user } = useAuth()

  const initialScrollDone = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const loadingRef = useRef(false)
  const cableRef = useRef<any>(null)

  const [loadingMore, setLoadingMore] = useState(false)

  const handleScroll = async () => {
    const container = containerRef.current

    if (!container || loadingRef.current) return

    const reachedTop = container.scrollTop <= 10

    if (reachedTop) {
      loadingRef.current = true
      setLoadingMore(true)

      try {
        await loadMoreMessages(roomId)
      } finally {
        loadingRef.current = false
        setLoadingMore(false)
      }
    }
  }

  const emptyListOfMessages = () => {
    return (
      <div
        className="w-full flex flex-col justify-between items-center"
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
    const container = containerRef.current

    if (!container || messages.length === 0) return

    if (!initialScrollDone.current) {
      container.scrollTop = container.scrollHeight
      initialScrollDone.current = true
    }
  }, [messages.length, roomId])

  useEffect(() => {
    initialScrollDone.current = false
  }, [roomId])

  useEffect(() => {
    if (!cableRef.current) {
      cableRef.current = createCable()
    }

    return () => {
      cableRef.current?.disconnect()
      cableRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!roomId || !cableRef.current) return

    const subscription = cableRef.current.subscriptions.create(
      { channel: "RoomChannel", room_id: roomId },
      {
        connected() {
          console.log("Conectado na sala", roomId)
        },

        disconnected() {
          console.log("Desconectado da sala", roomId)
        },

        received(data: IMessage) {
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
      ref={containerRef}
      onScroll={handleScroll}
      className="h-full overflow-y-auto container-scroll flex flex-col gap-2"
      style={{ padding: 16 }}
    >
      {loadingMore && (
        <p className="text-center text-gray-400 text-sm">
          Carregando mensagens antigas...
        </p>
      )}

      {messages.length === 0
        ? emptyListOfMessages()
        : messages.map((message) => {
            const direction = message.user_id === user?.id ? "out" : "in"

            return (
              <MessageBubble
                key={message.id}
                direction={direction}
                message={message}
              />
            )
          })}
    </div>
  )
}
