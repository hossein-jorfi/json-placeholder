import useFetchData from "@/service/use-fetch-data";
import { PostType } from "../posts/types";

const Post = () => {
  const { error, data } = useFetchData<PostType>(["posts", "1"]);
  // const commentsQuery = useFetchData<PostType>(["posts", "1", "comments"]);

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex justify-center items-center mt-10 md:mt-20">
      <div className="border-2 rounded-lg w-full md:w-2/3 p-5">
        <div className="space-y-3">
          <h3 className=" font-bold text-3xl">{data?.title}</h3>
          <h3 className="text-2xl text-muted-foreground">{data?.body}</h3>
        </div>
      </div>
    </div>
  );
};

export default Post;
