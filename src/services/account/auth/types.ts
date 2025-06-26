import type { PostgresUser } from '@/types/models/postgresUser'

export interface ValidateCredentialsPayload {
  email: string
  password: string
}

export interface ValidateCredentialsResponse {
  refreshToken: string
  token: string
  user: PostgresUser
}
