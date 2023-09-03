import { DataTable } from "@/components/data-table/data-table"
import { columns } from "./columns";
import { z } from "zod"
import { ticketSummarySchema } from "@/schemas/ticket"
import data from '@/schemas/tickets.json'

function getTickets() {
  const tickets = data.map((ticket) => {
    const createdDateTime = new Date(ticket.createdDateTime);
    const resolvedDateTime = new Date(ticket.resolvedDateTime);
    const lastModifiedDateTime = new Date(ticket.lastModifiedDateTime);

    return {
      ...ticket,
      createdDateTime,
      resolvedDateTime,
      lastModifiedDateTime,
    }
  });
  
  return z.array(ticketSummarySchema).parse(tickets);
}

function TicketsTable() {
  const tickets = getTickets();

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <DataTable data={tickets} columns={columns}/>
      </div>
    </>
  );
}

export default TicketsTable
