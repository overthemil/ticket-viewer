import CreateTicket from "./components/create-ticket";
import { ModeToggle } from "./components/mode-toggle";
import Search from "./components/search";
import Navbar from "./components/navbar";
import { UserNav } from "./components/user-nav";
import Notifications from "./components/notifications";

function Dashboard() {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <h1 className="text-3xl font-bold tracking-tight">TicketViewer</h1>
            <Navbar className="mx-6"/>
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <CreateTicket />
              <Notifications />
              <ModeToggle />
              <UserNav />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard
