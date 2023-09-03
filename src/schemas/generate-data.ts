/**
 * Will create all of the JSON files with the fake data we'll use
 *
 * Run this file with the following command:
 *  npx ts-node --esm src/mock/generate-data.ts
 **/
import fs from "fs"
import path from "path"
import { faker } from "@faker-js/faker"
import { ArrowBigUpDash, Bug, ChevronDown, ChevronsUp, Equal, MessageSquare, Phone } from "lucide-react";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


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

console.log("Generating...");

/**
 * Generate Users
 **/
console.log("Generate Users");
const users = Array.from({length: 30}, () => ({
  id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
}));
fs.writeFileSync(
  path.join(__dirname, "users.json"),
  JSON.stringify(users, null, 2),
)
console.log("Users generated");

/**
 * Generate Ticket Summaries
 **/
console.log("Generating Ticket Summaries");
const tickets = Array.from({length: 300}, () => ({
  id: faker.number.int({min: 10000, max: 99999}),
  summary: faker.company.buzzPhrase(),
  type: faker.helpers.arrayElement(ticketTypesOptions).value,
  priority: faker.helpers.arrayElement(ticketPrioritiesOptions).value,
  status: faker.helpers.arrayElement(ticketStatusOptions).value,
  createdDateTime: faker.date.betweens({ from: '2020-01-01T00:00:00.000Z', to: '2023-09-01T00:00:00.000Z', count: 1 }).at(0),
  resolvedDateTime: faker.date.betweens({ from: '2020-01-01T00:00:00.000Z', to: '2023-09-01T00:00:00.000Z', count: 1 }).at(0),
  lastModifiedDateTime: faker.date.betweens({ from: '2020-01-01T00:00:00.000Z', to: '2023-09-01T00:00:00.000Z', count: 1 }).at(0),
  reporter: faker.helpers.arrayElement(users),
  assignee: faker.helpers.arrayElement(users),
}));
fs.writeFileSync(
  path.join(__dirname, "tickets.json"),
  JSON.stringify(tickets, null, 2),
)
console.log("Tickets generated");

