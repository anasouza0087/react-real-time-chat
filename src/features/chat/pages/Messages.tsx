import { useParams, useLocation } from "react-router-dom"
import {
  InviteUserModal,
  MessageFooter,
  MessagesHeader,
  MessagesList,
} from "../components"
import { useMessages } from "../hooks/useMessages.hook"
import { useEffect, useState } from "react"
import { useUser } from "../hooks/useUser.hook"

export const Messages = () => {
  const [openModal, setOpenModal] = useState(false)
  const { id } = useParams()
  const location = useLocation()
  const { messages, listMessages, inviteUser, leaveRoom } = useMessages()
  const { setUserQuery, userQuery, users, setUsers, onSearchUser } = useUser()

  const roomNameFromState = location.state?.roomName

  const onCloseModal = () => {
    setOpenModal(false)
    setUsers([])
  }

  useEffect(() => {
    listMessages(Number(id))
  }, [id])

  return (
    <div className="h-screen flex flex-col">
      <MessagesHeader
        room={roomNameFromState}
        openModal={setOpenModal}
        onLeaveRoom={leaveRoom}
        roomId={id}
      />

      <div className="flex-1 overflow-y-auto">
        <MessagesList messages={messages} />
      </div>

      <MessageFooter roomId={id} />

      {openModal && (
        <InviteUserModal
          onClose={onCloseModal}
          users={users}
          querySearch={setUserQuery}
          userQuery={userQuery}
          onSearchUser={onSearchUser}
          onInviteUser={inviteUser}
          roomId={id}
        />
      )}
    </div>
  )
}
