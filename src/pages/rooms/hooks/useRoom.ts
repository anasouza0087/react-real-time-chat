import { useEffect, useState } from "react"
import type { IRoom } from "../types"
import { deleteRoom, getRooms, patchRoom, postRoom } from "../services"

export const useRoom = () => {
  const [roomForm, setRoomForm] = useState<Partial<IRoom>>({
    name: "",
    description: "",
  })
  const [rooms, setRooms] = useState<IRoom[]>([])
  const [showError, setShowError] = useState(false)
  const [openModal, setOpenModal] = useState<{
    isOpen: boolean
    data: undefined | Partial<IRoom>
  }>({
    isOpen: false,
    data: undefined,
  })

  const onChangeRoom = (name: "name" | "description", value: string) => {
    setRoomForm({
      ...roomForm,
      [name]: value,
    })
  }

  const onListRooms = async () => {
    await getRooms().then((resp) => {
      console.log(resp)
      setRooms([...resp])
    })
  }

  const handleCreateOrEditRoom = (isEdit: boolean) => {
    if (isEdit) {
      onEditRoom()
    } else {
      onCreateRoom()
    }
  }

  const onEditRoom = async () => {
    if (!roomForm?.name || !roomForm?.description || !roomForm.id) {
      setShowError(true)
      return
    }
    const updatedRoom = {
      room: {
        name: roomForm.name,
        description: roomForm.description,
      },
    }
    await patchRoom({ ...updatedRoom }, roomForm.id).then(() => {
      setOpenModal({
        isOpen: false,
        data: undefined,
      })
      setShowError(false)
      onListRooms()
    })
  }

  const onCreateRoom = async () => {
    if (!roomForm?.name || !roomForm?.description) {
      setShowError(true)
      return
    }
    const newRoom = {
      room: {
        name: roomForm.name,
        description: roomForm.description,
      },
    }
    await postRoom({ ...newRoom }).then(() => {
      setOpenModal({
        isOpen: false,
        data: undefined,
      })
      setShowError(false)
    })
    onListRooms()
  }

  const onDeleteRoom = async (id: number) => {
    await deleteRoom(id).then(() => onListRooms())
  }

  useEffect(() => {
    onListRooms()
  }, [])

  return {
    roomForm,
    showError,
    openModal,
    rooms,
    setOpenModal,
    onChangeRoom,
    handleCreateOrEditRoom,
    onDeleteRoom,
    setRoomForm,
  }
}
