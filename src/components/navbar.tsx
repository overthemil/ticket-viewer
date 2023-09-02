import CreateTicket from "./create-ticket";
import { ModeToggle } from "./mode-toggle";
import Search from "./search";
import { UserNav } from "./user-nav";
import Notifications from "./notifications";
import NavbarLinks from "./navbar-links";
import { NavbarLink } from "@/interfaces/NavbarLink";
import NavbarMobile from "./navbar-mobile";

const links: NavbarLink[] = [
  {
    id: 0,
    label: "Dashboard",
    href: "/"
  },
  {
    id: 1,
    label: "Queues",
    href: "/queues"
  },
  {
    id: 2,
    label: "Calendar",
    href: "/calendar"
  },
  {
    id: 3,
    label: "Wiki",
    href: "/wiki"
  },
];

function Navbar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <h1 className="hidden md:flex text-3xl font-bold tracking-tight">TicketViewer</h1>
        <NavbarLinks links={links} className="hidden mx-6 md:flex"/>
        <NavbarMobile links={links} className="md:hidden"/>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <CreateTicket />
          <Notifications />
          <div className="hidden md:flex">
            <ModeToggle />
          </div>
          <UserNav />
        </div>
      </div>
    </div>
  );
}

export default Navbar
