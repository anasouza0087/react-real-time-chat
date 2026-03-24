import { useState } from "react"
import { Login } from "../services"

interface ILoginForm {
  username: string
  password: string
}

export const useLogin = () => {
  const [loginForm, setLoginForm] = useState<ILoginForm>({
    username: "",
    password: "",
  })
  const [showError, setShowError] = useState(false)

  const onChangeLoginForm = (name: "username" | "password", value: string) => {
    setLoginForm({
      ...loginForm,
      [name]: value,
    })
  }

  const handleLogin = async () => {
    if (!loginForm.username || !loginForm.password) {
      setShowError(true)
      return
    }
    await Login(loginForm.username, loginForm.password).then(() => {
      setShowError(false)
    })
  }

  return {
    onChangeLoginForm,
    handleLogin,
    showError,
    loginForm,
  }
}
