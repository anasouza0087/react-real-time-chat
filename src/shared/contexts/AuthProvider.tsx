import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { AuthContext, type User } from "./AuthContext"
import { getMe } from "../services/auth"

export function AuthProvider() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    async function loadUser() {
      try {
        const user = await getMe()
        setUser(user)
      } catch {
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [])

  function logout() {
    localStorage.removeItem("token")
    setUser(null)
    navigate("/login")
  }

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {/* {children} */}
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <span>Carregando...</span>
        </div>
      ) : (
        <Outlet />
      )}
    </AuthContext.Provider>
  )
}
