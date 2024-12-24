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
    <div key={post.id} className="border p-4 rounded-lg flex flex-col gap-3">
      <p className="font-bold text-2xl">{post.title}</p>
      <p>{post.body}</p>
      <Button className="w-fit" onClick={() => navigateHandler(post?.id)}>
        See More
      </Button>
    </div>
  );
};

export default PostCard;
