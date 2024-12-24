// api
import useFetchData from "@/service/use-fetch-data";

// types
import { PostType } from "./types";

// components
import PostCard from "./post-card";
import { Checkbox } from "@/components/ui/checkbox";

const Posts = () => {
  const { isPending, error, data } = useFetchData<PostType[]>(["posts"]);

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="space-y-4">
      <Checkbox />
      <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
        {data?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
