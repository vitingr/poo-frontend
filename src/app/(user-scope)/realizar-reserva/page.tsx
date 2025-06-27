import type { NextPage } from 'next'
import { redirect } from 'next/navigation'

import { Footer } from '@/components/common/Footer'
import { AppSidebar } from '@/components/common/Sidebar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { getUserSession } from '@/utils/auth/getUserSession'
import { getMetaData } from '@/utils/seo/getMetadata'

import { ReservationType } from './components/ReservationType'

export async function generateMetadata() {
  return getMetaData({
    title: 'Realizar Reserva | POO IFSP',
    description:
      'Bem-Vindo à plataforma de gerenciamento de hóteis da matéria de POO II do IFSP Capivari',
    image: '',
    url: '/realizar-reserva'
  })
}

const Page: NextPage = async () => {
  const user = await getUserSession()

  if (!user) {
    redirect('/login')
  }

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full overflow-hidden bg-neutral-50">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b">
            <div className="flex items-center gap-2 px-3">
              <SidebarTrigger />
              <Separator className="mr-2 h-4" orientation="vertical" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Plataforma de Hotéis IFSP
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Realizar Checkin</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <ReservationType />
        </main>
      </SidebarProvider>
      <Footer />
    </>
  )
}
export default Page
