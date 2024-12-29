import { ScrollArea } from "@/components/ui/scroll-area";
import { PostType } from "@/defenitions";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Props {
  data: PostType[] | undefined;
  isLoading: boolean;
}

const UserPosts = ({ data }: Props) => {
  return (
    <div className="flex flex-col max-h-72 overflow-hidden gap-2">
      <p className="text-sm font-semibold">Posts</p>
      <ScrollArea className="flex flex-col">
        {data?.map((post, index) => (
          <div
            key={post.id}
            className={cn(
              "flex flex-col border p-3 rounded-lg my-3",
              index == 0 && "mt-0"
            )}
          >
            <div className="flex gap-2 items-center">
              <p className="font-semibold opacity-70">{post.title}</p>
            </div>
            <p className="opacity-50">{post.body}</p>
            <Button>See More</Button>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

export default UserPosts;
