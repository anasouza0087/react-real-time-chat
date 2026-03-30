import { FaPlus } from "react-icons/fa"
import type { IRoom } from "../types"

interface ICreateRoomButton {
  openModal: any
}

export const CreateRoomButton = ({ openModal }: ICreateRoomButton) => {
  return (
    <div className="w-full flex flex-row justify-center items-end h-20">
      <button
        className="w-[60%] h-14 bg-indigo-600 rounded gap-4 flex flex-row justify-center items-center cursor-pointer"
        onClick={() => openModal({ isOpen: true, data: undefined })}
      >
        <div className="font-bold">
          <FaPlus />
        </div>
        <p className="font-bold">Criar Nova sala</p>
      </button>
    </div>
  )
}
