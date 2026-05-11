import {
  CreateOrEditRoomModal,
  CreateRoomButton,
  RoomsHeader,
  RoomsList,
} from "../components"
import { useRoom } from "../hooks/useRoom.hook"

export const Rooms = () => {
  const {
    openModal,
    setOpenModal,
    rooms,
    loadMoreRooms,
    loadingMore,
    onDeleteRoom,
    onChangeRoom,
    roomForm,
    handleCreateOrEditRoom,
    setRoomForm,
  } = useRoom()

  return (
    <div className="h-screen flex flex-col">
      <RoomsHeader />
      <CreateRoomButton openModal={setOpenModal} />

      <div className="flex-1 min-h-0 ">
        <RoomsList
          openModal={setOpenModal}
          rooms={rooms}
          loadMoreRooms={loadMoreRooms}
          loadingMore={loadingMore}
          onDeleteRoom={onDeleteRoom}
        />
      </div>

      {openModal.isOpen && (
        <CreateOrEditRoomModal
          open={openModal}
          openModal={setOpenModal}
          onChangeRoom={onChangeRoom}
          roomForm={roomForm}
          handleCreateOrEditRoom={handleCreateOrEditRoom}
          setRoomForm={setRoomForm}
        />
      )}
    </div>
  )
}
