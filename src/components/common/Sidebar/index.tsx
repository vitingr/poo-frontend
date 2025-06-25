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
          title: 'Quartos Ocupados',
          url: '/quartos-em-uso'
        },
        {
          title: 'Quartos Disponíveis',
          url: '/quartos-disponiveis'
        }
      ]
    },
    {
      title: 'Reservas',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Todas Reservas',
          url: '/reservas'
        },
        {
          title: 'Nova Reserva',
          url: '/realizar-reserva'
        },
        {
          title: 'Todos Checkins',
          url: '/checkins'
        },
        {
          title: 'Cancelamentos',
          url: '#'
        }
      ]
    },
    {
      title: 'Hóspedes',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'Hóspedes Cadastrados',
          url: '/hospedes'
        },
        {
          title: 'Cadastrar Hóspede',
          url: '/cadastrar-hospede'
        }
      ]
    }
  ],
  projects: [
    {
      name: 'Gestão de Quartos',
      url: '/todos-quartos',
      icon: Frame
    },
    {
      name: 'Gestão de Reservas',
      url: '/reservas',
      icon: PieChart
    },
    {
      name: 'Relatórios & Análises',
      url: '/',
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
