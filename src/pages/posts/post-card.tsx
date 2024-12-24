// hooks
import { useNavigate } from "react-router";

// types
import { PostType } from "./types";

// components
import { Button } from "@/components/ui/button";

interface Props {
  post: PostType;
}

const PostCard = ({ post }: Props) => {
  const navigate = useNavigate();

  const navigateHandler = (id: number) => {
    navigate(`${id}`);
  };

  return (
    <div
      key={post.id}
      className="border p-4 rounded-lg flex flex-col gap-3 justify-between"
    >
      <div className="flex justify-between">
        <p className="font-semibold text-sm"># {post.id}</p>
        like
      </div>
      <p className="font-bold text-2xl">{post.title}</p>
      <p className="text-muted-foreground">{post.body}</p>
      <Button className="w-fit" onClick={() => navigateHandler(post?.id)}>
        See More
      </Button>
    </div>
  );
};

export default PostCard;
