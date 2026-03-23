import { useState } from "react"

interface ILoginForm {
  email: string
  password: string
}

export const useLogin = () => {
  const [loginForm, setLoginForm] = useState<ILoginForm>({
    email: "",
    password: "",
  })
  const [showError, setShowError] = useState(false)

  const onChangeLoginForm = (name: "email" | "password", value: string) => {
    setLoginForm({
      ...loginForm,
      [name]: value,
    })
  }

  const handleLogin = () => {
    //faz validações
    //chama a api

    if (!loginForm.email || !loginForm.password) {
      console.log(loginForm)
      setShowError(true)
      return
    }
    console.log(loginForm)
    setShowError(false)
  }

  return {
    onChangeLoginForm,
    handleLogin,
    showError,
    loginForm,
  }
}
