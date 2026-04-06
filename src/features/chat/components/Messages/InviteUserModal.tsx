import { Input, Modal } from "../../../../ui"
import { LuUserSearch } from "react-icons/lu"
import { UsersList } from "./UsersList"

export const InviteUserModal = (props) => {
  const {
    onClose,
    users,
    querySearch,
    userQuery,
    onSearchUser,
    onInviteUser,
    roomId,
  } = props
  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      onConfirm={() => null}
      title={"Convidar Usuários"}
    >
      <div
        className="w-full mb-4 gap-2 items-center justify-between flex"
        style={{ marginBottom: 12 }}
      >
        <div className="flex-1">
          <Input
            label=""
            placeholder="Buscar usuário por nome ou login"
            value={userQuery}
            onChange={(e) => querySearch(e.target.value)}
          />
        </div>
        <button className="cursor-pointer" onClick={onSearchUser}>
          <LuUserSearch fontSize={30} color="#155DFC" />
        </button>
      </div>
      <div className="max-h-100 overflow-y-auto pr-1 container-scroll">
        <UsersList users={users} onInviteUser={onInviteUser} roomId={roomId} />
      </div>
    </Modal>
  )
}
