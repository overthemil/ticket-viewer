import { TicketComment } from "@/interfaces/TicketComment";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import { useState } from "react";

interface CommentCardProps extends React.HTMLAttributes<HTMLElement> {
  comment: TicketComment,
}

const CommentCard: React.FC<CommentCardProps> = ({comment, className, ...props}) => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <Card {...props}>
        <CardHeader className="p-3 bg-card-header">
          <CardTitle className="flex text-md justify-between">
            <div>{comment.author}</div>
            <div className="flex gap-2">
              {comment.internal && <Badge className="bg-purple-800">Internal</Badge>}
              {comment.reporter && <Badge className="bg-green-800">Reporter</Badge>}
              <div>{comment.date}</div>
            </div>
          </CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="whitespace-pre-wrap break-words mt-6">
          <div>
            {comment.comment}
          </div>
          <div>
            {comment.img && 
              <div>
                <img src="/screenshot.png" onClick={() => setIndex(0)} className="mb-2 cursor-pointer"/>
                <div>And this is the ticket route:</div>
                <img src="/screenshot-2.png" onClick={() => setIndex(1)} className="mb-2 cursor-pointer"/>
                <div>Kind Regards,</div>
                <div>Pedro Alves</div>
              </div>
            }
          </div>
        </CardContent>
      </Card>
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={[{ src: "/screenshot.png" }, { src: "/screenshot-2.png" }]}
        plugins={[Zoom, Counter]}
      />
    </>
  )
};

export default CommentCard
