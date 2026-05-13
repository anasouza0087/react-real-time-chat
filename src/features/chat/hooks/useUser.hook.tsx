import { useState } from "react"
import { getUsers } from "../services/user.service"
import type { IUser } from "../types"

export const useUser = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [userQuery, setUserQuery] = useState("")

  const onSearchUser = async () => {
    const response = await getUsers(userQuery)
    setUserQuery("")
    setUsers(response)
  }

  return { users, onSearchUser, setUserQuery, userQuery, setUsers }
}
