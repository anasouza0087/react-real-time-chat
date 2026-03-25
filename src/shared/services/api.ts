import axios from "axios"
import { showError, showSuccess } from "../../ui/Toast"
import { errorMessages, successMessages } from "../translations"

export const api = axios.create({
  baseURL: "http://localhost:3000",
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

api.interceptors.response.use(
  (response) => {
    if (response.data?.message) {
      const translatedMessage = successMessages[response.data?.message]
      showSuccess(translatedMessage)
    }

    return response
  },
  (error) => {
    const translatedMessage = error.response?.data?.error
      ? errorMessages[error.response?.data?.error]
      : "Erro inesperado"

    showError(translatedMessage)

    return Promise.reject(error)
  },
)
