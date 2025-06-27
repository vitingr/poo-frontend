import CredentialsProvider from 'next-auth/providers/credentials'

import { credentialsOptions } from './credentialsOptions'

export const authOptions = {
  providers: [CredentialsProvider(credentialsOptions)],

  callbacks: {
    async session({ session, token }) {
      session.user = token.user
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user
      }
      console.log(token)
      return token
    }
  },

  pages: {
    signIn: '/?should_authenticate=true'
  },

  secret: process.env.NEXTAUTH_SECRET
}
