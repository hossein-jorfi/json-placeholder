import { ScrollArea } from "@/components/ui/scroll-area";
import { CommentType } from "@/defenitions";
import { cn } from "@/lib/utils";

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
            className={cn("flex flex-col border p-3 rounded-lg my-3", index == 0 && 'mt-0')}
          >
            <p className="font-semibold opacity-70">{comment.name}</p>
            <p className="opacity-50">{comment.body}</p>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

export default PostComments;
