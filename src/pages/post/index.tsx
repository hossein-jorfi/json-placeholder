import useFetchData from "@/service/use-fetch-data";
import { PostType } from "../posts/types";

const Post = () => {
  const { isPending, error, data } = useFetchData<PostType>(["posts", "1"]);
  console.log(data);

  return <div>Post Single</div>;
};

export default Post;
