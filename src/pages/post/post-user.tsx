import { UserType } from "@/defenitions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  data: UserType | undefined;
  isLoading: boolean;
}

const PostUser = ({ data }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback>
          {data?.name?.split(" ")?.[0]?.[0]}
          {data?.name?.split(" ")?.[1]?.[0]}
        </AvatarFallback>
      </Avatar>
      <p>{data?.name}</p>
    </div>
  );
};

export default PostUser;
