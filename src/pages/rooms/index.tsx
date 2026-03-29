import {
  CreateOrEditRoomModal,
  CreateRoomButton,
  RoomsHeader,
  RoomsList,
} from "./components"
import { useRoom } from "./hooks/useRoom"

export const Rooms = () => {
  const { openModal, setOpenModal } = useRoom()
  return (
    <div>
      <RoomsHeader />
      <CreateRoomButton openModal={setOpenModal} />
      <RoomsList openModal={setOpenModal} />

      {openModal.isOpen && (
        <CreateOrEditRoomModal open={openModal} openModal={setOpenModal} />
      )}
    </div>
  )
}
