import { createConsumer } from "@rails/actioncable"

export const createCable = () => {
  const token = localStorage.getItem("token")
  const wsUrl = import.meta.env.VITE_API_URL.replace(/^http/, "ws")

  return createConsumer(`${wsUrl}/cable?token=${token}`)
}
