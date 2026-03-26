import { createBrowserRouter } from "react-router-dom"
import { Login } from "../login"
import { Chats } from "../chats"
import { AuthProvider } from "../../shared"

export const router = createBrowserRouter([
  {
    element: <AuthProvider />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/chats",
        element: <Chats />,
      },
    ],
  },
])
