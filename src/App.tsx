import { RouterProvider } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import "./styles/global.css"
import { router } from "./routes"

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

export default App
