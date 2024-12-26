import { ScrollArea } from "@/components/ui/scroll-area";
import { CommentType } from "@/defenitions";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  data: CommentType[] | undefined;
  isLoading: boolean;
}

const PostComments = ({ data }: Props) => {
  return (
    <div className="flex flex-col max-h-72 overflow-hidden gap-2">
      <p className="text-sm font-semibold">Comments</p>
      <ScrollArea className="flex flex-col">
        {data?.map((comment, index) => (
          <div
            key={comment.id}
            className={cn(
              "flex flex-col border p-3 rounded-lg my-3",
              index == 0 && "mt-0"
            )}
          >
            <div className="flex gap-2 items-center">
              <Avatar className="w-7 h-7 text-xs">
                <AvatarImage src="" alt="@shadcn" />
                <AvatarFallback>
                  {comment?.name?.split(" ")?.[0]?.[0]}
                  {comment?.name?.split(" ")?.[1]?.[0]}
                </AvatarFallback>
              </Avatar>
              <p className="font-semibold opacity-70">{comment.name}</p>
            </div>
            <p className="opacity-50">{comment.body}</p>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

export default PostComments;
