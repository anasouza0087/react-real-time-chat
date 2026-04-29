import toast from "react-hot-toast"

export const showSuccess = (message: string) => {
  if (!message) return
  toast.success(message)
}

export const showError = (message: string) => {
  if (!message) return
  toast.error(message)
}
