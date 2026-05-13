import { useEffect, useState } from "react"
import type { IRoom } from "../types/rooms.types"
import {
  deleteRoom,
  getRooms,
  patchRoom,
  postRoom,
} from "../services/room.services"

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
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)

  const onChangeRoom = (name: "name" | "description", value: string) => {
    setRoomForm({
      ...roomForm,
      [name]: value,
    })
  }

  const onListRooms = async () => {
    const resp = await getRooms(1)

    setRooms(resp)
    setPage(2)
  }

  const loadMoreRooms = async () => {
    if (loadingMore || !hasMore) return

    setLoadingMore(true)

    try {
      const resp = await getRooms(page)

      if (resp.length === 0) {
        setHasMore(false)
        return
      }

      setRooms((prev) => [...prev, ...resp])
      setPage((prev) => prev + 1)
    } finally {
      setLoadingMore(false)
    }
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

    await patchRoom({ ...updatedRoom }, roomForm.id)
    setOpenModal({
      isOpen: false,
      data: undefined,
    })
    setShowError(false)
    await onListRooms()
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
    loadMoreRooms,
    loadingMore,
  }
}
