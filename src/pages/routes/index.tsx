import { createBrowserRouter } from "react-router-dom"
import { Login } from "../login"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/chat",
    // element: </>,
  },
])
