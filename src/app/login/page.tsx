import type { NextPage } from 'next'

import { LoginForm } from './components/LoginForm'

const Page: NextPage = async () => {
  return (
    <main className="min-h-[100vh] bg-white">
      <LoginForm />
    </main>
  )
}

export default Page
