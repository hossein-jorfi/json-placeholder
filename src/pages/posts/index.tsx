// api
import useFetchData from "@/service/use-fetch-data";

// types
import { PostType } from "./types";

// components
import PostCard from "./post-card";

const Posts = () => {
  const { isPending, error, data } = useFetchData<PostType[]>(["posts"]);

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
      {data?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
