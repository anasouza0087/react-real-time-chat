import { createBrowserRouter } from "react-router";
import { Login, Rooms, Messages } from "../features/chat/pages";
import { AuthProvider } from "../shared";


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
      {
        path: "/rooms/:id",
        element: <Messages />,
      },
    ],
  },
])
