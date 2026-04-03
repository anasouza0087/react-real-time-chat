import { useEffect } from "react"
import { Modal, Input, InputMultiline } from "../../../../ui"
import { useRoom } from "../../hooks/useRoom.hook"
import type { IRoom } from "../../types/rooms.types"

interface ICreateOrEditRoomModal {
  open: { isOpen: boolean; data: undefined | Partial<IRoom> }
  openModal: React.Dispatch<
    React.SetStateAction<{ isOpen: boolean; data: undefined | Partial<IRoom> }>
  >
}

export const CreateOrEditRoomModal = (props: ICreateOrEditRoomModal) => {
  const { open, openModal } = props
  const { onChangeRoom, roomForm, handleCreateOrEditRoom, setRoomForm } =
    useRoom()

  useEffect(() => {
    if (open?.data) {
      setRoomForm({ ...open.data })
    }
  }, [open?.data])

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
