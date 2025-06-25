'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
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
    accessorKey: 'id',
    header: 'ID da Reserva',
    cell: info => <div className="font-medium">{String(info.getValue())}</div>
  },
  {
    accessorKey: 'room_id',
    header: 'ID do Quarto',
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
          className={`capitalize ${status === 'active' ? 'text-green-600' : 'text-gray-500'}`}
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
      const reservation = row.original

      const today = new Date()
      const isSameDay = (a: Date, b: Date) =>
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()

      const checkInDate = new Date(reservation.start_date)
      const checkOutDate = new Date(reservation.end_date)

      const canCheckIn = isSameDay(today, checkInDate)
      const canCheckOut =
        reservation.status === 'ACTIVE' && isSameDay(today, checkOutDate)

      const handleCheckIn = () => {
        console.log(`Realizando check-in da reserva ${reservation.id}`)
      }

      const handleCheckOut = () => {
        console.log(`Realizando check-out da reserva ${reservation.id}`)
      }

      return (
        <div className="flex gap-2">
          {!canCheckOut && (
            <Button
              className="disabled:bg-neutral-400"
              disabled={!canCheckIn || reservation.status !== 'PENDING'}
              onClick={handleCheckIn}
              size="sm"
              variant="default"
            >
              Fazer Check-in
            </Button>
          )}

          {canCheckOut && (
            <Button onClick={handleCheckOut} size="sm" variant="default">
              Fazer Check-out
            </Button>
          )}
        </div>
      )
    }
  }
]

export const ReservationsTable = ({ data }: { data: Reservation[] }) => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

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
          className="max-w-sm"
          onChange={e => table.getColumn('id')?.setFilterValue(e.target.value)}
          placeholder="Filter by User ID..."
          value={(table.getColumn('id')?.getFilterValue() ?? '') as string}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="ml-auto" variant="outline">
              Columns
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
                  No reservations found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} selected.
        </div>
        <div className="space-x-2">
          <Button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            size="sm"
            variant="outline"
          >
            Previous
          </Button>
          <Button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            size="sm"
            variant="outline"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
