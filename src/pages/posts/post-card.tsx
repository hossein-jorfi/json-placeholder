// hooks
import { useNavigate } from "react-router";

// assets
import { Heart } from "lucide-react";

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

  const onLikeHandler = () => {
    if (!localStorage?.getItem("liked-post")) {
      localStorage.setItem("liked-post", JSON.stringify([]));
    }
    const likedPosts = JSON?.parse(localStorage?.getItem("liked-post") || "");

    const isLiked = likedPosts.find((id: number) => id == post.id);
    if (isLiked) {
      localStorage.setItem(
        "liked-post",
        JSON.stringify(likedPosts?.filter((id: number) => id != post?.id))
      );
    } else {
      localStorage.setItem(
        "liked-post",
        JSON.stringify([...likedPosts, post.id])
      );
    }
  };

  return (
    <div
      key={post.id}
      className="border p-4 rounded-lg flex flex-col gap-3 justify-between"
    >
      <div className="flex justify-between">
        <p className="font-semibold text-sm"># {post.id}</p>
        <Button variant="ghost" onClick={onLikeHandler}>
          {<Heart />}
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
