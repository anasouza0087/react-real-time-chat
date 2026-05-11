import { useEffect } from "react"
import { Modal, Input, InputMultiline } from "../../../../ui"
import type { IRoom } from "../../types/rooms.types"

interface ICreateOrEditRoomModal {
  open: { isOpen: boolean; data: undefined | Partial<IRoom> }
  openModal: React.Dispatch<
    React.SetStateAction<{ isOpen: boolean; data: undefined | Partial<IRoom> }>
  >
  onChangeRoom: (name: "name" | "description", value: string) => void
  roomForm: Partial<IRoom>
  handleCreateOrEditRoom: (isEdit: boolean) => void
  setRoomForm: React.Dispatch<React.SetStateAction<Partial<IRoom>>>
}

export const CreateOrEditRoomModal = (props: ICreateOrEditRoomModal) => {
  const {
    open,
    openModal,
    onChangeRoom,
    roomForm,
    handleCreateOrEditRoom,
    setRoomForm,
  } = props

  useEffect(() => {
    if (open?.data) {
      setRoomForm({ ...open.data })
    } else {
      setRoomForm({
        name: "",
        description: "",
      })
    }
  }, [open.data])

  return (
    <Modal
      title="Criar Novo Chat"
      isOpen={open.isOpen}
      showConfirmationButton={true}
      onClose={() =>
        openModal({
          isOpen: false,
          data: undefined,
        })
      }
      onConfirm={() => {
        handleCreateOrEditRoom(!!roomForm.id)
        openModal({
          isOpen: false,
          data: undefined,
        })
      }}
    >
      <div className="gap-4 flex flex-col justify-between">
        <div>
          <Input
            label="Nome da sala"
            placeholder="Ex.: Equipe de Desenvolvimento"
            value={roomForm.name || ""}
            onChange={(e) => onChangeRoom("name", e.target.value)}
          />
        </div>
        <div>
          <InputMultiline
            label="Descrição"
            placeholder="Sobre o que é esta Sala?"
            value={roomForm.description || ""}
            onChange={(e) => onChangeRoom("description", e.target.value)}
          />
        </div>
      </div>
    </Modal>
  )
}
