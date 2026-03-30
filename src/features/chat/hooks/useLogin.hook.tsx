import { useState } from "react"
import { login, createUser } from "../services/login.services"
import { useNavigate } from "react-router"

interface ILoginForm {
  username: string
  password: string
  passwordCheck?: string
  name?: string
}

type formName = "username" | "password" | "passwordCheck" | "name"

export const useLogin = () => {
  const [loginForm, setLoginForm] = useState<ILoginForm>({
    username: "",
    password: "",
  })
  const [showError, setShowError] = useState(false)
  const navigate = useNavigate()

  const onChangeLoginForm = (name: formName, value: string) => {
    setLoginForm({
      ...loginForm,
      [name]: value,
    })
  }

  const handleLogin = async (isAuthentication: boolean) => {
    if (isAuthentication) {
      onAuthenticateLogin()
    } else {
      onCreateUser()
    }
  }

  const onAuthenticateLogin = async () => {
    if (!loginForm.username || !loginForm.password) {
      setShowError(true)
      return
    }
    await login(loginForm.username, loginForm.password).then(() => {
      setShowError(false)
      navigate("/rooms")
    })
  }

  const onCreateUser = async () => {
    if (
      !loginForm.username ||
      !loginForm.password ||
      !loginForm.name ||
      !loginForm.passwordCheck ||
      loginForm.password !== loginForm.passwordCheck
    ) {
      setShowError(true)
      return
    }

    const newUser = {
      user: {
        name: loginForm.name,
        username: loginForm.username,
        password: loginForm.password,
      },
    }
    await createUser(newUser).then(() => {
      setShowError(false)
      navigate("/rooms")
    })
  }

  return {
    onChangeLoginForm,
    handleLogin,
    showError,
    loginForm,
  }
}
