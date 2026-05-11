import { useRef } from "react"
import { IoChatbubbleOutline } from "react-icons/io5"
import type { IRoom } from "../../types/rooms.types"
import { RoomCard } from "./RoomCard"

interface IRoomList {
  rooms: IRoom[]
  loadMoreRooms: () => Promise<void>
  loadingMore: boolean
  openModal: React.Dispatch<
    React.SetStateAction<{ isOpen: boolean; data: undefined | Partial<IRoom> }>
  >
  onDeleteRoom: (roomId: number) => void
}

export const RoomsList = ({
  rooms,
  loadMoreRooms,
  loadingMore,
  openModal,
  onDeleteRoom,
}: IRoomList) => {
  const loadingRef = useRef(false)

  const handleScroll = async (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget

    if (loadingRef.current) return

    const reachedBottom =
      container.scrollHeight - container.scrollTop <=
      container.clientHeight + 20

    if (reachedBottom) {
      loadingRef.current = true

      try {
        await loadMoreRooms()
      } finally {
        loadingRef.current = false
      }
    }
  }

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
    <div
      className="h-full overflow-y-auto container-scroll"
      onScroll={handleScroll}
    >
      {rooms.length === 0 ? (
        emptyListOfRooms()
      ) : (
        <>
          <RoomCard
            openModal={openModal}
            onDeleteRoom={onDeleteRoom}
            rooms={rooms}
          />

          {loadingMore && (
            <p className="text-center py-4 text-gray-400">
              Carregando mais salas...
            </p>
          )}
        </>
      )}
    </div>
  )
}
