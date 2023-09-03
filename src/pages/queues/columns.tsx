import { ColumnDef } from "@tanstack/react-table"

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header"
import { TicketSummary, companyOptions, queueOptions, ticketPrioritiesOptions, ticketStatusOptions } from "@/schemas/ticket"
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

      const getIconStyle = () => {
        switch(priority.value) {
          case "minor":
            return `mr-2 h-4 w-4 stroke-[#075985]`;
          case "medium":
            return `mr-2 h-4 w-4 stroke-[#fde047]`;
          case "major":
            return `mr-2 h-4 w-4 stroke-[#fb923c]`;
          case "critical":
            return `mr-2 h-4 w-4 stroke-[#ef4444]`;
        }
      }

      return (
        <div className="flex w-[100px] items-center">
          {priority.icon && (
            <priority.icon className={getIconStyle()}/>
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
    accessorKey: "queue",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Queue" />
    ),
    enableSorting: false,
    cell: ({ row }) => {
      const queue = queueOptions.find(
        (data) => data.value === row.getValue("queue")
      )

      if (!queue) {
        return null
      }

      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {`${queue.label}`}
          </span>
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
    accessorKey: "company",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Company" />
    ),
    enableSorting: false,
    cell: ({ row }) => {
      const company = companyOptions.find(
        (company) => company.value === row.getValue("company")
      )

      if (!company) {
        return null
      }

      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {`${company.label}`}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
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
