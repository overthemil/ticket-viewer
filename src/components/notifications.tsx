import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react";
import { useToast } from "@/components/ui/use-toast"

function Notifications() {
  const { toast } = useToast();

  const notImplemented = () => {
    toast({
      description: "Not Implemeneted",
      duration: 1000,
    })
  };

  return (
    <Button onClick={notImplemented} variant="outline" size="icon" className="min-w-[2.5rem]">
      <Bell className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Notifications</span>
    </Button>
  );
}

export default Notifications
