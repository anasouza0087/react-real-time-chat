import { useState } from "react"
import { CreateChatButton } from "./CreateChatButton"
import { Header } from "./Header"
import { CreateOrEditChatModal } from "./CreateOrEditChatModal"

export const Chats = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Header />
      <CreateChatButton openModal={setOpen} />

      {open && <CreateOrEditChatModal open={open} setOpen={setOpen} />}
    </div>
  )
}
