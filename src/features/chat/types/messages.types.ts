export interface IMessage {
  id: number
  content: string
  user_id: number
  room_id: number
  created_at: string
  updated_at: string
  user: {
    id: number
    name: string
    password_digest: string
    status?: null
    enabled?: null
    created_at: string
    updated_at: string
    username: string
  }
}
