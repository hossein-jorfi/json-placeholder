import { useEffect, useState } from "react";

// api
import useFetchData from "@/service/use-fetch-data";

// types
import { PostType } from "./types";

// components
import PostCard from "./post-card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import PostsSkeleton from "./posts-skeleton";

const Posts = () => {
  const [showLikedPosts, setShowLikedPosts] = useState(false);
  const [filtredData, setFiltredData] = useState<PostType[]>([]);

  const { isPending, error, data } = useFetchData<PostType[]>(["posts"]);
  console.log(isPending);

  useEffect(() => {
    setFiltredData(data || []);
  }, [data]);

  const filterData = () => {
    const show = !showLikedPosts;
    if (show) {
      const likedPosts = JSON?.parse(
        localStorage?.getItem("liked-post") || "[]"
      );
      setFiltredData(data?.filter((i) => likedPosts?.includes(i.id)) || []);
    } else {
      setFiltredData(data || []);
    }
    setShowLikedPosts(!showLikedPosts);
  };

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" checked={showLikedPosts} onClick={filterData} />
        <Label htmlFor="terms">Liked Posts</Label>
      </div>
      <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
        {isPending ? (
          <PostsSkeleton />
        ) : (
          filtredData?.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
};

export default Posts;
