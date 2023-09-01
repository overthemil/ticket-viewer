import { cn } from "@/lib/utils"
import { Link, useLocation } from "react-router-dom";

const links = [
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

function NavbarLinks({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  let location = useLocation();

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {links.map((link) => {
        return (location.pathname === link.href ? (
          <Link
            key={link.id}
            to={link.href}
            className="text-md font-medium transition-colors hover:text-primary">
              {link.label} 
          </Link>
        ) : (
          <Link
            key={link.id}
            to={link.href}
            className="text-md font-medium text-muted-foreground transition-colors hover:text-primary">
              {link.label} 
          </Link>
        ));
      })}
      </nav>
  )
}

export default NavbarLinks
