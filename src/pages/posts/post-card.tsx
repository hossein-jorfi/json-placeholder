// hooks
import { useNavigate } from "react-router";

// assets
import { Heart } from "lucide-react";

// types
import { PostType } from "./types";

// components
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { handlePostLikeLocalStorage, isPostLiked } from "./util";

interface Props {
  post: PostType;
}

const PostCard = ({ post }: Props) => {
  const navigate = useNavigate();

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(isPostLiked(post.id));
  }, [liked, post.id]);

  const navigateHandler = (id: number) => {
    navigate(`${id}`);
  };

  const onLikeHandler = () => {
    handlePostLikeLocalStorage(post.id);
    setLiked(!liked);
  };

  return (
    <div
      key={post.id}
      className="border p-4 rounded-lg flex flex-col gap-3 justify-between"
    >
      <div className="flex justify-between">
        <p className="font-semibold text-sm"># {post.id}</p>
        <Button variant="ghost" size="icon" onClick={onLikeHandler}>
          {liked === true ? <Heart color="red" fill="red" /> : <Heart />}
        </Button>
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
