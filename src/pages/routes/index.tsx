import { createBrowserRouter } from "react-router-dom"
import { Login } from "../login"
import { Rooms } from "../rooms"
import { AuthProvider } from "../../shared"

export const router = createBrowserRouter([
  {
    element: <AuthProvider />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
    ],
  },
])
