'use client'

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal
} from 'lucide-react'
import * as React from 'react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar'

import { NavMain } from './NavMain'
import { NavProjects } from './NavProjects'
import { NavUser } from './NavUser'
import { TeamSwitcher } from './TeamSwitcher'

const data = {
  user: {
    name: 'Admin',
    email: 'admin@cs2.com',
    avatar: '/avatars/shadcn.jpg'
  },
  teams: [
    {
      name: 'Projeto IFSP POO',
      logo: GalleryVerticalEnd,
      plan: 'Admin'
    },
    {
      name: 'Pousada do Sol',
      logo: AudioWaveform,
      plan: 'Standard'
    },
    {
      name: 'Resort Mar Azul',
      logo: Command,
      plan: 'Basic'
    }
  ],
  navMain: [
    {
      title: 'Dashboard',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Visão Geral',
          url: '/'
        },
        {
          title: 'Configurações do Painel',
          url: '#'
        }
      ]
    },
    {
      title: 'Quartos',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Todos os Quartos',
          url: '/todos-quartos'
        },
        {
          title: 'Adicionar Quarto',
          url: '/adicionar-quarto'
        },
        {
          title: 'Em Manutenção',
          url: '/quartos-em-manutencao'
        }
      ]
    },
    {
      title: 'Reservas',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Check-ins Recentes',
          url: '/checkins-recentes'
        },
        {
          title: 'Realizar Checkin',
          url: '/realizar-checkin'
        },
        {
          title: 'Todos Checkins',
          url: '/todos-checkins'
        },
        {
          title: 'Cancelamentos',
          url: '#'
        }
      ]
    },
    {
      title: 'Configurações',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'Geral',
          url: '#'
        },
        {
          title: 'Equipe',
          url: '#'
        },
        {
          title: 'Financeiro',
          url: '#'
        },
        {
          title: 'Limites e Planos',
          url: '#'
        }
      ]
    }
  ],
  projects: [
    {
      name: 'Gestão de Quartos',
      url: '#',
      icon: Frame
    },
    {
      name: 'Gestão de Reservas',
      url: '#',
      icon: PieChart
    },
    {
      name: 'Relatórios & Análises',
      url: '#',
      icon: Map
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
