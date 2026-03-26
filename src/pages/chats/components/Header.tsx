import { SlBubble } from "react-icons/sl"
import { IoExit } from "react-icons/io5"
import { useAuth } from "../../../shared"

export const Header = () => {
  const { logout, user } = useAuth()

  return (
    <div className="bg-gray-800 border-2 border-gray-700 min-h-[8vh] flex flex-row justify-center items-center">
      <div className="w-[60%] flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-4">
          <div className="bg-indigo-600 w-12 h-12 flex items-center justify-center rounded-full">
            <SlBubble fontSize={30} />
          </div>
          <div>
            <h1 className="font-bold">Meus Chats</h1>
            <p className="font-light text-gray-400">
              {user?.name ?? "Usuário desconhecido"}
            </p>
          </div>
        </div>
        <div>
          <IoExit
            fontSize={30}
            color="#9CA3AF"
            cursor="pointer"
            onClick={logout}
          />
        </div>
      </div>
    </div>
  )
}
