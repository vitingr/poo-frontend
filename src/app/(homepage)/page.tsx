import type { NextPage } from 'next'

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

import { Dashboards } from './components/Dashboards'
import { AppSidebar } from './components/Sidebar'

const Page: NextPage = async () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full bg-neutral-50">
        <SidebarTrigger />
        <Dashboards />
      </main>
    </SidebarProvider>
  )
}

export default Page
