import { ColumnDef } from "@tanstack/react-table"

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header"
import { TicketSummary, ticketPrioritiesOptions, ticketStatusOptions } from "@/schemas/ticket"
import { User } from "@/schemas/user"

export const columns: ColumnDef<TicketSummary>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ticket" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
    enableSorting: false,
    cell: ({ row }) => {
      const priority = ticketPrioritiesOptions.find(
        (priority) => priority.value === row.getValue("priority")
      )

      if (!priority) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground"/>
          )}
          <span>{priority.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    enableSorting: false,
    cell: ({ row }) => {
      const status = ticketStatusOptions.find(
        (status) => status.value === row.getValue("status")
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          <span>{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "summary",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Summary" />
    ),
    enableSorting: false,
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("summary")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "reporter",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reporter" />
    ),
    enableSorting: false,
    cell: ({ row }) => {
      const user: User = row.getValue("reporter");
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {`${user.firstName} ${user.lastName}`}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "assignee",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Assignee" />
    ),
    enableSorting: false,
    cell: ({ row }) => {
      const user: User = row.getValue("assignee");
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {`${user.firstName} ${user.lastName}`}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "createdDateTime",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created" />
    ),
    cell: ({ row }) => {
      const date: Date = row.getValue("createdDateTime");
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {`${date.toLocaleDateString('en-AU')}`}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "lastModifiedDateTime",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Updated" />
    ),
    cell: ({ row }) => {
      const date: Date = row.getValue("lastModifiedDateTime");
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {`${date.toLocaleDateString('en-AU')}`}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "resolvedDateTime",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Resolved" />
    ),
    cell: ({ row }) => {
      const date: Date = row.getValue("resolvedDateTime");
      const label = () => {
        if(row.getValue("status") === "resolved") {
          return date.toLocaleDateString('en-AU');
        }
        return "-";
      }
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {`${label()}`}
          </span>
        </div>
      )
    },
  }
]
