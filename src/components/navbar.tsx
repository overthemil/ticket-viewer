import CreateTicket from "./create-ticket";
import { ModeToggle } from "./mode-toggle";
import Search from "./search";
import { UserNav } from "./user-nav";
import Notifications from "./notifications";
import NavbarLinks from "./navbar-links";

function Navbar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <h1 className="text-3xl font-bold tracking-tight">TicketViewer</h1>
        <NavbarLinks className="mx-6"/>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <CreateTicket />
          <Notifications />
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </div>
  );
}

export default Navbar
