import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useToast } from "@/components/ui/use-toast"

function CreateTicket() {
  const { toast } = useToast();

  const notImplemented = () => {
    toast({
      description: "Not Implemeneted",
    })
  };

  return (
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <Button onClick={notImplemented} variant="outline" size="icon">
          <Plus className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Create Ticket</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        Create Ticket
      </TooltipContent>
    </Tooltip>
    </TooltipProvider>
  );
}

export default CreateTicket
