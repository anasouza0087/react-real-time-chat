import { FaPen } from "react-icons/fa"
import { RiDeleteBinLine } from "react-icons/ri"

import { useNavigate } from "react-router"
import { useRoom } from "../../hooks/useRoom.hook"
import type { IRoom } from "../../types/rooms.types"

interface IRoomCard {
  openModal: React.Dispatch<
    React.SetStateAction<{ isOpen: boolean; data: undefined | Partial<IRoom> }>
  >
}

export const RoomCard = (props: IRoomCard) => {
  const { openModal } = props
  const { onDeleteRoom, rooms } = useRoom()
  const navigate = useNavigate()
  return (
    <>
      {rooms.map((room) => {
        return (
          <div
            className="w-full flex flex-col justify-center items-center"
            style={{ marginTop: 20 }}
            key={room.id}
          >
            <div
              className="border-2 border-gray-700 rounded-2xl bg-gray-800 w-[60%] h-24 flex flex-row justify-between"
              style={{ padding: 20 }}
            >
              <div
                className="flex flex-col gap-2  w-full cursor-pointer"
                onClick={() =>
                  navigate(`/rooms/${room.id}`, {
                    state: { roomName: room.name },
                  })
                }
              >
                <h1 className="font-bold ">{room?.name}</h1>
                <p className="font-light text-gray-400">{room?.description}</p>
              </div>
              <div className="flex flex-row justify-center items-center gap-4">
                <FaPen
                  color="#4e5b6e"
                  fontSize={20}
                  cursor="pointer"
                  onClick={() => {
                    openModal({ isOpen: true, data: { ...room } })
                  }}
                />
                <RiDeleteBinLine
                  color="#F87171"
                  fontSize={20}
                  cursor="pointer"
                  onClick={() => onDeleteRoom(room.id)}
                />
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
