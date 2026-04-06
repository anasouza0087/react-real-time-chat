import { BiUserPlus } from "react-icons/bi"

export const UsersList = (props) => {
  const { users, onInviteUser, roomId } = props
  return (
    <div style={{ marginBottom: 30 }}>
      {users.map((user) => (
        <div >
          <div className="flex flex-col gap-2" style={{ marginTop: 8 }}>
            <div
              className="w-full flex items-center justify-between rounded bg-[#101828] border border-gray-700"
              style={{ padding: 8 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full text-white font-bold">
                  T
                </div>

                <div className="flex flex-col">
                  <span className="text-white font-semibold">{user?.name}</span>
                  <span className="text-gray-400 text-sm">
                    {user?.username}
                  </span>
                </div>
              </div>

              <button
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg"
                style={{ padding: 6 }}
                onClick={() => onInviteUser(roomId, user?.id)}
              >
                <BiUserPlus size={18} />
                Convidar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

//className="max-h-80 overflow-y-auto pr-1"
