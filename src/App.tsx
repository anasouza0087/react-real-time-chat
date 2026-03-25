import { RouterProvider } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import "./styles/global.css"
import { router } from "./pages/routes"
import { AuthProvider } from "./shared"

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </>
  )
}

export default App
