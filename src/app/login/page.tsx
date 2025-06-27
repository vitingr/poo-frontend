import type { NextPage } from 'next'
import { redirect } from 'next/navigation'

import { getUserSession } from '@/utils/auth/getUserSession'
import { getMetaData } from '@/utils/seo/getMetadata'

import { LoginForm } from './components/LoginForm'

export async function generateMetadata() {
  return getMetaData({
    title:
      'Bem-vindo à plataforma de gerenciamento de quartos de hóteis do IFSP Capivari',
    description:
      'Bem-Vindo à plataforma de gerenciamento de hóteis da matéria de POO II do IFSP Capivari',
    image: '',
    url: '/login'
  })
}

const Page: NextPage = async () => {
  const user = await getUserSession()

  if (user) {
    redirect('/')
  }

  return (
    <main className="min-h-[100vh] bg-white">
      <LoginForm />
    </main>
  )
}

export default Page
