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
    if (credentials.email === 'admin@gmail.com') {
      return {
        email: 'admin@gmail.com',
        password: 'admin',
        updatedAt: '',
        createdAt: '',
        id: '65911b4d-0539-4815-9dc9-c4ddc0483e2d'
      }
    }

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
