import { useState } from "react"
import { getUsers } from "../services/user.service"

export const useUser = () => {
  const [users, setUsers] = useState<any[]>([])
  const [userQuery, setUserQuery] = useState("")

  const onSearchUser = async () => {
    const response = await getUsers(userQuery)
    setUserQuery("")
    setUsers(response)
  }

  return { users, onSearchUser, setUserQuery, userQuery, setUsers }
}
