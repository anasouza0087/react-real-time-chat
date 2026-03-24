import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import "./styles/global.css"
import { router } from "./pages/routes"
import { Toaster } from "react-hot-toast"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
    <Toaster />
  </>,
)
