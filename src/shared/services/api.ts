import axios from "axios"
import { showError, showSuccess } from "../../ui/Toast"
import { errorMessages, successMessages } from "../translations"

export const api = axios.create({
  baseURL: "http://localhost:3000",
})

api.interceptors.response.use(
  (response) => {
    console.log(response)
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
