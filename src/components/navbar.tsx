import { cn } from "@/lib/utils"
import { Link } from "react-router-dom";

function Navbar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        to="/"
        className="text-md font-medium transition-colors hover:text-primary"
      >
        Dashboard 
      </Link>
      <Link
        to="/"
        className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Queues 
      </Link>
      <Link
        to="/"
        className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Wiki 
      </Link>
    </nav>
  )
}

export default Navbar
