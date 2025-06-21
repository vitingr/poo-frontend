import type { PostgresUser } from '../models/postgresUser'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    accessToken?: string
    error?: string
    user: PostgresUser
  }
  interface User {
    accessToken?: string
    expiresIn?: number
    refreshToken?: string
  }
  interface JWT {
    accessToken?: string
    accessTokenExpires?: number
    error?: string
    refreshToken?: string
  }

  namespace NodeJs {
    interface ProcessEnv {
      API_KEY: string
    }
  }
}
