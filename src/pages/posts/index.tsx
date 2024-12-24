// api
import useFetchData from "@/service/use-fetch-data";

// types
import { PostType } from "./types";

// components
import PostCard from "./post-card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Posts = () => {
  const [showLikedPosts, setShowLikedPosts] = useState(false);
  console.log(showLikedPosts);

  const { isPending, error, data } = useFetchData<PostType[]>(["posts"]);

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={showLikedPosts}
          onClick={() => setShowLikedPosts(!showLikedPosts)}
        />
        <Label htmlFor="terms">Liked Posts</Label>
      </div>
      <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
        {data?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
