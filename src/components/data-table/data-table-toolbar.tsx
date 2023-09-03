import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "@/components/data-table/data-table-view-options"

import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import { X } from "lucide-react"
import { companyOptions, queueOptions, ticketPrioritiesOptions, ticketStatusOptions } from "@/schemas/ticket"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center gap-2 flex-wrap">
        <Input
          placeholder="Filter tickets..."
          value={(table.getColumn("summary")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("summary")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("queue") && (
          <DataTableFacetedFilter
            column={table.getColumn("queue")}
            title="Queue"
            options={queueOptions}
          />
        )}
        {table.getColumn("company") && (
          <DataTableFacetedFilter
            column={table.getColumn("company")}
            title="Company"
            options={companyOptions}
          />
        )}
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={ticketStatusOptions}
          />
        )}
        {table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={ticketPrioritiesOptions}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
