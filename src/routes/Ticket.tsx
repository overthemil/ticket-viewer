import CommentCard from "@/components/comment-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Bug, Equal } from "lucide-react";
import data from '@/schemas/ticket-comments.json';
import { TicketComment } from "@/interfaces/TicketComment";

function TicketActions() {
  return (
    <div className="flex flex-wrap mt-2 gap-2 content-start">
      <Button className="font-bold">EDIT</Button>
      <Button className="font-bold">COMMENT</Button>
      <Button className="font-bold">LOG WORK</Button>
      <Button className="font-bold">FOLLOW UP</Button>
      <Button className="font-bold">RESOLVE</Button>
      <Button className="font-bold">WORKFLOW</Button>
    </div>
  );
}

function TicketDetails() {
  return (
    <div className="flex flex-wrap justify-evenly gap-2">
      <div className="flex items-center">
        Type:
        <Bug className="ml-4 mr-2 stroke-blue-400"/>
        Incident
      </div>
      <div className="flex items-center">
        Priority:
        <Equal className="ml-4 mr-2 stroke-yellow-400"/>
        Medium 
      </div>
      <div className="flex items-center">
        Status:
        <Badge className="ml-4 bg-orange-600">Waiting for Support</Badge>
      </div>
    </div>
  );
}

function Ticket() {
  const comments: TicketComment[] = data;
  return (
    <>
      <div className="m-auto max-w-6xl p-8">
        <h1 className="text-2xl font-bold tracking-tight">12345 - Request: Can you explain how this web app works?</h1>
        <TicketActions />
        <Separator className="mt-2 mb-2"/>
        <TicketDetails />
        <Separator className="mt-2 mb-2"/>
        <div className="space-y-8">
          {
            comments.map((comment) => 
              <CommentCard comment={comment}/>
            )
          }
        </div>
      </div>
    </>
  );
}

export default Ticket;
