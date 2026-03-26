import type { Dispatch, SetStateAction } from "react"
import { Input, InputMultiline, Modal } from "../../../ui"

interface ICreateOrEditChatModal {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export const CreateOrEditChatModal = (props: ICreateOrEditChatModal) => {
  const { open, setOpen } = props
  return (
    <Modal
      isOpen={open}
      onClose={() => setOpen(false)}
      onConfirm={() => {
        setOpen(false)
      }}
    >
      <div className="gap-4 flex flex-col justify-between">
        <div>
          <Input
            label="Nome do Chat"
            placeholder="Ex.: Equipe de Desenvolvimento"
            onChange={() => null}
          />
        </div>
        <div>
          <InputMultiline
            label="Descrição"
            placeholder="Sobre o que é este Chat?"
            onChange={() => null}
          />
        </div>
      </div>
    </Modal>
  )
}
