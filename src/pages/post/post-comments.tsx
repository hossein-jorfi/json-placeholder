import { CommentType } from "@/defenitions";

interface Props {
  data: CommentType[] | undefined;
  isLoading: boolean;
}

const PostComments = ({ data }: Props) => {
  return (
    <div className="flex flex-col">
      {data?.map((comment) => (
        <div className="flex flex-col">
          <p>{comment.name}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostComments;
