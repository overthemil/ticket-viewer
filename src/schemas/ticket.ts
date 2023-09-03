import { z } from "zod"
import { userSchema } from "./user";
import { ArrowBigUpDash, Bug, ChevronDown, ChevronsUp, Equal, MessageSquare, Phone } from "lucide-react";

export const ticketSummarySchema = z.object({
  id: z.number().int(),
  summary: z.string(),
  type: z.enum(["incident", "phone", "service"]),
  priority: z.enum(["minor", "medium", "major", "critical"]),
  status: z.enum(["support", "retail", "dev-pending", "dev-completed", "review-charge", "resolved"]),
  company: z.enum(["bp", "shell", "chevron", "exxon", "petrochina", "aramco"]),
  queue: z.enum(["me", "triage", "level2", "level3", "retail"]),
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

export const companyOptions = [
  {
    value: "bp",
    label: "BP",
  },
  {
    value: "shell",
    label: "Shell",
  },
  {
    value: "chevron",
    label: "Chevron",
  },
  {
    value: "aramco",
    label: "Aramco",
  },
  {
    value: "exxon",
    label: "Exxon",
  },
  {
    value: "petrochina",
    label: "Petro China",
  }
]

export const queueOptions = [
  {
    value: "me",
    label: "Waiting on Me",
  },
  {
    value: "triage",
    label: "Support Triage",
  },
  {
    value: "level2",
    label: "Level 2 Support",
  },
  {
    value: "level3",
    label: "Level 3 Support",
  },
  {
    value: "retail",
    label: "Retail Support",
  }
]
