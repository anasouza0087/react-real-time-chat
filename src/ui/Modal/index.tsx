import type { ReactNode } from "react"

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  children: ReactNode
  confirmText?: string
  cancelText?: string
}

export function Modal({
  isOpen,
  onClose,
  onConfirm,
  children,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
}: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="w-full max-w-2xl rounded-2xl bg-gray-800 border-gray-700 border-2 shadow-lg min-h-[35vh] flex flex-col justify-around"
        style={{ padding: 12 }}
      >
        <div>
          <h1 className="font-bold text-2xl">Criar Novo Chat</h1>
        </div>
        <div className="mb-6">{children}</div>

        <div className="flex justify-center items-center w-full">
          <div className="flex flex-row w-[60%] gap-3">
            <button
              onClick={onClose}
              className="rounded-lg border border-gray-300 text-sm hover:bg-gray-100 w-full"
              style={{ padding: 8 }}
            >
              {cancelText}
            </button>

            <button
              onClick={onConfirm}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 w-full"
              style={{ padding: 8 }}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
