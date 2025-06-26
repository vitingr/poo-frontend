'use client'

import axios from 'axios'
import { MoreHorizontal } from 'lucide-react'
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
import { useGetAllReservations } from '@/hooks/swr/useGetAllReservations'
import type { Reservation } from '@/types/models/reservation'
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

import { CheckinRealized } from './CheckinRealized'
import { CheckoutRealized } from './CheckoutRealized'
import { ConfirmCancelReservation } from './ConfirmCancelReservation'

export const columns: ColumnDef<Reservation>[] = [
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
    accessorKey: 'guest_name',
    header: 'Nome do Hóspede',
    cell: info => <div className="font-medium">{String(info.getValue())}</div>
  },
  {
    accessorKey: 'room_code',
    header: 'Quarto Hospedado',
    cell: info => <div>{String(info.getValue())}</div>
  },
  {
    accessorKey: 'start_date',
    header: 'Data de Checkin',
    cell: info => (
      <div>{new Date(info.getValue() as string).toLocaleString()}</div>
    )
  },
  {
    accessorKey: 'end_date',
    header: 'Data de Checkout',
    cell: info => (
      <div>{new Date(info.getValue() as string).toLocaleString()}</div>
    )
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status')
      return (
        <div
          className={`w-fit rounded-sm px-2 py-1.5 text-center capitalize ${status === 'ACTIVE' ? 'bg-blue-50 text-blue-500' : status === 'FINISHED' ? 'bg-green-50 text-green-800' : status === 'CANCELED' ? 'bg-red-50 text-red-800' : 'bg-neutral-100 text-gray-500'}`}
        >
          {String(status)}
        </div>
      )
    }
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const { mutate } = useGetAllReservations()

      const [isCheckinFeedbackOpen, setIsCheckinFeedbackOpen] =
        useState<boolean>(false)
      const [isCheckoutFeedbackOpen, setIsCheckoutFeedbackOpen] =
        useState<boolean>(false)

      const reservation = row.original

      const today = new Date()
      const normalizeDate = (date: Date) =>
        new Date(date.getFullYear(), date.getMonth(), date.getDate())

      const isSameDay = (a: Date, b: Date) =>
        normalizeDate(a).getTime() === normalizeDate(b).getTime()

      const checkInDate = new Date(reservation.start_date)
      // const checkOutDate = new Date(reservation.end_date)

      const canCheckIn = isSameDay(today, checkInDate)
      const canCheckOut = reservation.status !== 'FINISHED'

      const handleCheckIn = async () => {
        try {
          const { status } = await axios.post('/api/checkins/create-checkin', {
            token: '',
            payload: {
              room_id: reservation.room_id,
              guest_id: reservation.guest_id,
              checkin_date: new Date().toISOString().slice(0, 19),
              checkout_estimated: reservation.end_date,
              reservation_id: reservation.id
            }
          })

          if (status !== 200) {
            toast.error('Ops! Não foi possível realizar o Checkin...')
            return
          }

          mutate()
          setIsCheckinFeedbackOpen(true)
        } catch (error) {
          console.error(error)
        }
      }

      const handleCheckOut = async () => {
        try {
          const { status } = await axios.post('/api/checkout/create-checkout', {
            token: '',
            payload: {
              room_id: reservation.room_id,
              guest_id: reservation.guest_id,
              checkout_date: new Date().toISOString().slice(0, 19),
              total_price: reservation?.total_price | 100,
              reservation_id: reservation.id
            }
          })

          if (status !== 200) {
            toast.error('Ops! Não foi possível realizar o Checkout...')
            return
          }

          mutate()
          setIsCheckoutFeedbackOpen(true)
        } catch (error) {
          console.error(error)
        }
      }

      const handleGenerateReport = async () => {
        try {
          const { status } = await axios.post('/api/reports/generate-report', {
            token: '',
            payload: {
              reservation_id: reservation.id
            }
          })

          if (status !== 200) {
            toast.error(
              'Ops! Não foi possível realizar o Relatório final dessa reserva...'
            )
            return
          }

          mutate()
          setIsCheckoutFeedbackOpen(true)
        } catch (error) {
          console.error(error)
        }
      }

      return (
        <div className="flex gap-2">
          {reservation.status === 'PENDING' && (
            <Button
              className="cursor-pointer disabled:bg-neutral-400"
              disabled={!canCheckIn || reservation.status !== 'PENDING'}
              onClick={handleCheckIn}
              size="sm"
              variant="default"
            >
              Fazer Check-in
            </Button>
          )}

          {reservation.status === 'ACTIVE' && (
            <Button
              className="cursor-pointer"
              disabled={!canCheckOut}
              onClick={handleCheckOut}
              size="sm"
              variant="default"
            >
              Fazer Check-out
            </Button>
          )}

          {reservation.status === 'FINISHED' && (
            <Button
              className="bg-green-600 transition-all duration-300 hover:bg-green-600 hover:brightness-110 disabled:bg-green-50"
              disabled={reservation.status !== 'FINISHED'}
              onClick={handleGenerateReport}
              size="sm"
              variant="default"
            >
              Gerar Relatório
            </Button>
          )}

          {reservation.status === 'CANCELED' && (
            <Button
              className="cursor-pointer disabled:bg-neutral-400"
              disabled={reservation.status === 'CANCELED'}
              onClick={handleCheckIn}
              size="sm"
              variant="default"
            >
              Cancelada
            </Button>
          )}

          <CheckoutRealized
            isOpen={isCheckoutFeedbackOpen}
            setIsOpen={setIsCheckoutFeedbackOpen}
          />
          <CheckinRealized
            isOpen={isCheckinFeedbackOpen}
            setIsOpen={setIsCheckinFeedbackOpen}
          />
        </div>
      )
    }
  },
  {
    id: 'more',
    enableHiding: false,
    cell: ({ row }) => {
      const reservation = row.original
      const [isOpen, setIsOpen] = useState(false)

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
                  if (
                    reservation.status === 'CANCELED' ||
                    reservation.status === 'FINISHED'
                  ) {
                    toast.error(
                      'Não é possível cancelar uma reserva já finalizada'
                    )
                    return
                  }
                  setIsOpen(true)
                }}
                className="cursor-pointer"
              >
                Cancelar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ConfirmCancelReservation
            isOpen={isOpen}
            reservation={reservation}
            setIsOpen={setIsOpen}
          />
        </>
      )
    }
  }
]

export const ReservationsTable = ({ data }: { data: Reservation[] }) => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
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
          onChange={e =>
            table.getColumn('guest_name')?.setFilterValue(e.target.value)
          }
          value={
            (table.getColumn('guest_name')?.getFilterValue() ?? '') as string
          }
          className="max-w-sm"
          placeholder="Filtrar por nome do hóspede"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="ml-auto" variant="outline">
              Colunas
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(col => col.getCanHide())
              .map(col => (
                <DropdownMenuCheckboxItem
                  checked={col.getIsVisible()}
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
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  data-state={row.getIsSelected() && 'selected'}
                  key={row.id}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell className="last:max-w-[80px]" key={cell.id}>
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
                  colSpan={columns.length}
                >
                  Nenhuma reserva foi encontrada.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} de{' '}
          {table.getFilteredRowModel().rows.length} selecionado(s).
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
