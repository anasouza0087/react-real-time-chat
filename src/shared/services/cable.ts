import { createConsumer } from "@rails/actioncable"

export const createCable = () => {
  const token = localStorage.getItem("token")

  return createConsumer(`ws://localhost:3000/cable?token=${token}`)
}