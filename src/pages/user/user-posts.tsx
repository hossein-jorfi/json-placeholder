import { ScrollArea } from "@/components/ui/scroll-area";
import { PostType } from "@/defenitions";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

interface Props {
  data: PostType[] | undefined;
}

const UserPosts = ({ data }: Props) => {
  const navigate = useNavigate();

  const navigateHandler = (id: number) => {
    navigate(`/posts/detail/${id}`);
  };

  return (
    <div className="flex flex-col max-h-96 overflow-hidden gap-2">
      <p className="text-sm font-semibold">Posts</p>
      <ScrollArea className="flex flex-col">
        {data?.map((post, index) => (
          <div
            key={post.id}
            className={cn(
              "flex flex-col border p-3 rounded-lg my-3 gap-2",
              index == 0 && "mt-0"
            )}
          >
            <div className="flex gap-2 items-center">
              <p className="font-semibold opacity-90">{post.title}</p>
            </div>
            <p className="opacity-60">{post.body}</p>
            <Button
              className="h-8 w-full xl:w-fit"
              variant="secondary"
              onClick={() => navigateHandler(post.id)}
            >
              See More
            </Button>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

export default UserPosts;
