import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react";
import { useToast } from "@/components/ui/use-toast"

function Notifications() {
  const { toast } = useToast();

  const notImplemented = () => {
    toast({
      description: "Not Implemeneted",
    })
  };

  return (
    <Button onClick={notImplemented} variant="outline" size="icon">
      <Bell className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Notifications</span>
    </Button>
  );
}

export default Notifications
