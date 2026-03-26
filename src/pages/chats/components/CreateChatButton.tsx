import type { Dispatch, SetStateAction } from "react"
import { FaPlus } from "react-icons/fa"

interface ICreateChatButton {
  openModal: Dispatch<SetStateAction<boolean>>
}

export const CreateChatButton = ({ openModal }: ICreateChatButton) => {
  return (
    <div className="w-full flex flex-row justify-center items-end h-20">
      <button
        className="w-[60%] h-14 bg-indigo-600 rounded gap-4 flex flex-row justify-center items-center cursor-pointer"
        onClick={() => openModal(true)}
      >
        <div className="font-bold">
          <FaPlus />
        </div>
        <p className="font-bold">Criar Novo Chat</p>
      </button>
    </div>
  )
}
