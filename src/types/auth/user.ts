export type StudyTimeEnum = 'evening' | 'morning' | 'afternoon'

export interface User {
  createdAt: string
  email: string
  error?: string
  id?: string
  name: string
  profilePicture?: string
  token?: string
  updatedAt: string
  userId: string
}
