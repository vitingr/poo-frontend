import type { User as NextAuthUser } from 'next-auth'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/libs/auth'
import type { User } from '@/types/auth/user'

export const getUserSession = async (): Promise<NextAuthUser & User> => {
  const session = await getServerSession(authOptions)

  return session?.user
}
