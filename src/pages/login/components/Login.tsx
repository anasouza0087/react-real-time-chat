import { SlBubble } from "react-icons/sl"
import { Button, Input } from "../../../ui"
import { useLogin } from "../hooks/useLogin"

export const Login = () => {
  const { onChangeLoginForm, showError, handleLogin, loginForm } = useLogin()
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="border-2 border-gray-700 rounded-md w-1/2 h-3/5 bg-gray-800 flex items-center justify-center">
        <div className="flex flex-col justify-between items-center h-[80%] w-full">
          <div className="flex flex-col items-center gap-2">
            <div className="bg-indigo-600 w-20 h-20 flex items-center justify-center rounded-full">
              <SlBubble fontSize={60} />
            </div>
            <h6 className="font-bold">ChatApp</h6>
            <h2 className="font-light text-gray-400">Entre na sua conta</h2>
          </div>

          <div className="flex flex-col gap-4 w-3/4">
            <Input
              placeholder="email@dominio.com"
              label="E-Mail"
              onChange={(e) => onChangeLoginForm("email", e.target.value)}
              error={showError && !loginForm.email}
            />
            <Input
              placeholder="Insira sua senha"
              label="Senha"
              onChange={(e) => onChangeLoginForm("password", e.target.value)}
              error={showError && !loginForm.password}
            />
            <Button label="Entrar" onClick={handleLogin} />
          </div>
          <h3 className="font-light text-gray-400">
            Não tem uma conta?{" "}
            <b className="text-blue-500 cursor-pointer">cadastre-se.</b>
          </h3>
        </div>
      </div>
    </div>
  )
}
