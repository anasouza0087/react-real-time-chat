import { IoChatbubbleOutline } from "react-icons/io5"
import { useRoom } from "../hooks/useRoom"
import { RoomCard } from "."
import type { IRoom } from "../types"

interface IRoomList {
  openModal: React.Dispatch<
    React.SetStateAction<{ isOpen: boolean; data: undefined | Partial<IRoom> }>
  >
}

export const RoomsList = (props: IRoomList) => {
  const { openModal } = props
  const { rooms } = useRoom()

  const emptyListOfRooms = () => {
    return (
      <div
        className="w-full h-24 flex flex-col justify-between items-center"
        style={{ marginTop: 200 }}
      >
        <IoChatbubbleOutline fontSize={40} />
        <h1 className="font-bold text-gray-400">Nenhuma Sala ainda</h1>
        <p className="font-light text-gray-500">Crie uma Sala para começar</p>
      </div>
    )
  }
  return (
    <>
      {rooms?.length == 0 ? (
        emptyListOfRooms()
      ) : (
        <RoomCard openModal={openModal} />
      )}
    </>
  )
}
