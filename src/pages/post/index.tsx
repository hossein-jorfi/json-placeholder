import useFetchData from "@/service/use-fetch-data";
import { CommentType, PostType, UserType } from "@/defenitions";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useParams } from "react-router";
import PostUser from "./post-user";
import PostComments from "./post-comments";

const Post = () => {
  const { postId } = useParams();

  const { isPending, error, data } = useFetchData<PostType>([
    "posts",
    postId || "",
  ]);
  const commentsQuery = useFetchData<CommentType[]>([
    "posts",
    postId || "",
    "comments",
  ]);
  const userQuery = useFetchData<UserType>(
    ["users", `${data?.userId}`],
    !isPending
  );

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex justify-center items-center mt-10 md:mt-20">
      <div className="border-2 rounded-lg w-full md:w-2/3 p-5 space-y-3">
        <div className="flex items-center justify-between">
          <PostUser data={userQuery.data} isLoading={userQuery.isPending} />
          <Button variant="ghost" size="icon">
            {/* {liked === true ? <Heart color="red" fill="red" /> : <Heart />} */}
            <Heart />
          </Button>
        </div>
        <div className="w-full border" />
        <div className="space-y-3">
          <h3 className=" font-bold text-3xl">{data?.title}</h3>
          <h3 className="text-2xl text-muted-foreground">{data?.body}</h3>
        </div>
        <PostComments
          data={commentsQuery.data}
          isLoading={commentsQuery.isPending}
        />
      </div>
    </div>
  );
};

export default Post;
