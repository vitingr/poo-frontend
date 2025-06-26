import { account } from '@/instances/account'

export const credentialsOptions = {
  id: 'credentials',
  name: 'credentials',
  credentials: {
    email: {
      label: 'email',
      type: 'email'
    },
    password: {
      label: 'password',
      type: 'string'
    }
  },
  async authorize(credentials) {
    const { data, status } = await account.auth.validateCredentials({
      email: credentials.email,
      password: credentials.password
    })

    if (status !== 200 || !data.token) {
      throw new Error('Invalid credentials')
    }

    return {
      ...data.user
      // accessToken: data.token,
      // refreshToken: data.refreshToken,
      // expiresIn: ACCESS_TOKEN_EXPIRES_PERIOD
    }
  }
}
