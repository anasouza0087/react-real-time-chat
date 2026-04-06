import { BsArrowLeftShort } from "react-icons/bs"
import { RxPeople } from "react-icons/rx"
import { IoExit } from "react-icons/io5"

import { useNavigate } from "react-router"

export const MessagesHeader = (props) => {
  const { room, openModal, onLeaveRoom, roomId } = props
  const navigate = useNavigate()
  return (
    <div className="bg-gray-800 border-2 border-gray-700 min-h-[8vh] flex flex-row justify-between items-center ">
      <div
        className="w-full flex flex-row justify-between items-center"
        style={{ padding: 20 }}
      >
        <div className="flex flex-row items-center gap-4">
          <div>
            <BsArrowLeftShort
              fontSize={30}
              color="#9CA3AF"
              onClick={() => navigate("/rooms")}
            />
          </div>
          <div>
            <h1 className="font-bold text-2xl">{room}</h1>
            <p className="font-light text-gray-400 text-sm">{`${2} Membros`}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <RxPeople fontSize={20} onClick={() => openModal(true)} />
          <IoExit fontSize={20} onClick={() => onLeaveRoom(roomId) } />
        </div>
      </div>
    </div>
  )
}
