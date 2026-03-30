import { useState } from "react"
import { SlBubble } from "react-icons/sl"
import { Button, Input } from "../../../ui"
import { useLogin } from "../hooks/useLogin.hook"

export const Login = () => {
  const [createLogin, setCreateLogin] = useState(false)
  const { onChangeLoginForm, showError, handleLogin, loginForm } = useLogin()

  const onSubmit = (e: React.FormEvent) => {
    const isAuthentication = createLogin
    e.preventDefault()
    handleLogin(!isAuthentication)
  }

  return (
    <div className="w-full h-screen flex items-center justify-center px-4">
      <div
        className={`border-2 border-gray-700 rounded-md w-full sm:w-4/5 md:w-2/3 lg:w-1/2 h-auto min-h-[70vh] bg-gray-800 flex items-center justify-center py-8`}
      >
        <form
          onSubmit={onSubmit}
          className="flex flex-col justify-between items-center w-full"
        >
          <div className="flex flex-col justify-between items-center gap-8 h-full w-full">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-indigo-600 w-20 h-20 flex items-center justify-center rounded-full">
                <SlBubble fontSize={60} />
              </div>
              <h1 className="font-bold">ChatApp</h1>
              <p className="font-light text-gray-400">Entre na sua conta</p>
            </div>

            <div className="flex flex-col gap-4 w-full px-6 sm:w-4/5 md:w-3/4">
              {createLogin && (
                <Input
                  placeholder="Seu nome"
                  label="Nome"
                  onChange={(e) => onChangeLoginForm("name", e.target.value)}
                  error={showError && !loginForm.name && createLogin}
                  aria-invalid={showError && !loginForm.name && createLogin}
                />
              )}
              <Input
                placeholder="Seu login"
                label="Usuário"
                onChange={(e) => onChangeLoginForm("username", e.target.value)}
                error={showError && !loginForm.username}
                aria-invalid={showError && !loginForm.username}
              />
              <Input
                placeholder="***"
                label="Senha"
                onChange={(e) => onChangeLoginForm("password", e.target.value)}
                error={showError && !loginForm.password}
                aria-invalid={showError && !loginForm.password}
                type="password"
              />
              {createLogin && (
                <Input
                  placeholder="***"
                  label="Confirmar senha"
                  onChange={(e) =>
                    onChangeLoginForm("passwordCheck", e.target.value)
                  }
                  error={showError && !loginForm.passwordCheck}
                  aria-invalid={showError && !loginForm.passwordCheck}
                  type="password"
                />
              )}
              <Button label="Entrar" type="submit" />
            </div>
            <div>
              <p className="font-light text-gray-400 text-center">
                {`${createLogin ? "Já" : "Não"} tem uma conta?`}{" "}
                <b
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setCreateLogin(!createLogin)}
                >
                  {createLogin ? "Entrar" : "Cadastre-se"}
                </b>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
