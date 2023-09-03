import { z } from "zod"
import { userSchema } from "./user";
import { ArrowBigUpDash, Bug, ChevronDown, ChevronsUp, Equal, MessageSquare, Phone } from "lucide-react";

export const ticketSummarySchema = z.object({
  id: z.number().int(),
  summary: z.string(),
  type: z.enum(["incident", "phone", "service"]),
  priority: z.enum(["minor", "medium", "major", "critical"]),
  status: z.enum(["support", "retail", "dev-pending", "dev-completed", "review-charge", "resolved"]),
  createdDateTime: z.date(),
  resolvedDateTime: z.date(),
  lastModifiedDateTime: z.date(),
  reporter: userSchema,
  assignee: userSchema,
});
export type TicketSummary = z.infer<typeof ticketSummarySchema>

export const ticketTypesOptions = [
  {
    value: "incident",
    label: "Incident",
    icon: Bug,
  },
  {
    value: "phone",
    label: "Phone",
    icon: Phone,
  },
  {
    value: "service",
    label: "Service Request",
    icon: MessageSquare
  }
]

export const ticketPrioritiesOptions = [
  {
    value: "minor",
    label: "Minor",
    icon: ChevronDown,
    colorDark: "#38bdf8",
    colorLight: "#075985",
  },
  {
    value: "medium",
    label: "Medium",
    icon: Equal,
    colorDark: "#fde047",
    colorLight: "#eab308"
  },
  {
    value: "major",
    label: "Major",
    icon: ChevronsUp,
    colorDark: "#fb923c",
    colorLight: "#d97706"
  },
  {
    value: "critical",
    label: "Critical",
    icon: ArrowBigUpDash,
    colorDark: "#ef4444",
    colorLight: "#dc2626"
  }
]

export const ticketStatusOptions = [
  {
    value: "support",
    label: "Waiting for Support",
  },
  {
    value: "retail",
    label: "Waiting For Retail",
  },
  {
    value: "dev-pending",
    label: "Pending Development",
  },
  {
    value: "dev-completed",
    label: "Dev Completed",
  },
  {
    value: "review-charge",
    label: "Awaiting Chargeable Review",
  },
  {
    value: "resolved",
    label: "Resolved",
  }
]
