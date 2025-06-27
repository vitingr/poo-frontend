'use client'

import axios from 'axios'
import { ChevronDown, MoreHorizontal } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'
import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { useGetAllGuests } from '@/hooks/swr/useGetAllGuests'
import type { Guest } from '@/types/models/guest'
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState
} from '@tanstack/react-table'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'

import { EditGuest } from './EditGuest'

export const guestColumns: ColumnDef<Guest>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        //@ts-expect-error
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        aria-label="Select all"
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        aria-label="Select row"
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'full_name',
    header: 'Nome Completo',
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue('full_name')}</div>
    )
  },
  {
    accessorKey: 'document',
    header: 'Documento',
    cell: ({ row }) => <div>{row.getValue('document')}</div>
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => <div>{row.getValue('email')}</div>
  },
  {
    accessorKey: 'phone',
    header: 'Telefone',
    cell: ({ row }) => <div>{row.getValue('phone')}</div>
  },
  {
    accessorKey: 'birth_date',
    header: 'Data de Nascimento',
    cell: ({ row }) => {
      const date = new Date(row.getValue('birth_date'))
      return <div>{date.toLocaleDateString()}</div>
    }
  },
  {
    accessorKey: 'is_active',
    header: 'Status',
    cell: ({ row }) => (
      <div
        className={`capitalize ${
          row.getValue('is_active')
            ? 'w-fit rounded-sm bg-blue-50 px-3 py-1 text-blue-500'
            : 'w-fit rounded-sm bg-neutral-100 px-3 py-1 text-neutral-600'
        }`}
      >
        {row.getValue('is_active') ? 'Active' : 'Inactive'}
      </div>
    )
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const guest = row.original
      const [isOpen, setIsOpen] = useState<boolean>(false)
      const { mutate } = useGetAllGuests()

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="h-8 w-8 p-0" variant="ghost">
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Ações</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  toast.success('Email copiado para área de transferências')
                  navigator.clipboard.writeText(guest.email)
                }}
                className="cursor-pointer"
              >
                Copiar email
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  toast.success('Documento copiado para área de transferências')
                  navigator.clipboard.writeText(guest.document)
                }}
                className="cursor-pointer"
              >
                Copiar documento
              </DropdownMenuItem>
              {guest.is_active ? (
                <DropdownMenuItem
                  onClick={async () => {
                    try {
                      const { status } = await axios.post(
                        '/api/guests/update-guest',
                        {
                          payload: {
                            is_active: false
                          },
                          token: '',
                          guestId: guest.id
                        }
                      )

                      if (status !== 200) {
                        toast.error(
                          'Não foi possível atualizar o status do hóspede...'
                        )
                        return
                      }

                      await mutate()
                    } catch (error) {
                      console.error(error)
                    }
                  }}
                >
                  Desativar Hóspede
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem
                  onClick={async () => {
                    try {
                      const { status } = await axios.post(
                        '/api/guests/update-guest',
                        {
                          payload: {
                            is_active: true
                          },
                          token: '',
                          guestId: guest.id
                        }
                      )

                      if (status !== 200) {
                        toast.error(
                          'Não foi possível atualizar o status do hóspede...'
                        )
                        return
                      }

                      await mutate()
                    } catch (error) {
                      console.error(error)
                    }
                  }}
                >
                  Ativar Hóspede
                </DropdownMenuItem>
              )}
              <DropdownMenuItem className="cursor-pointer">
                <Link href={`tel:+${guest.phone}`}>Entrar em contato</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                Editar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <EditGuest guest={guest} isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
      )
    }
  }
]

export const GuestsTable = ({ data }: { data: Guest[] }) => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns: guestColumns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    },
    initialState: {
      pagination: {
        pageSize: 5
      }
    }
  })

  return (
    <div className="-mt-4 w-full">
      <div className="flex items-center py-4">
        <Input
          onChange={event =>
            table.getColumn('full_name')?.setFilterValue(event.target.value)
          }
          value={
            (table.getColumn('full_name')?.getFilterValue() as string) ?? ''
          }
          className="max-w-sm"
          placeholder="Filtrar hóspedes..."
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="ml-auto" variant="outline">
              Colunas <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(col => col.getCanHide())
              .map(col => (
                <DropdownMenuCheckboxItem
                  checked={col.getIsVisible()}
                  className="capitalize"
                  key={col.id}
                  onCheckedChange={value => col.toggleVisibility(!!value)}
                >
                  {col.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  data-state={row.getIsSelected() && 'selected'}
                  key={row.id}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  className="h-24 text-center"
                  colSpan={guestColumns.length}
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} coluna(s) selecionada(s).
        </div>
        <div className="space-x-2">
          <Button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            size="sm"
            variant="outline"
          >
            Anterior
          </Button>
          <Button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            size="sm"
            variant="outline"
          >
            Próximo
          </Button>
        </div>
      </div>
    </div>
  )
}
