import { UserType } from "@/defenitions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router";

interface Props {
  data: UserType | undefined;
}

const UserAvatar = ({ data }: Props) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(`/users/detail/${data?.id}`);
  };

  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={navigateHandler}
    >
      <Avatar>
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback>
          {data?.name?.split(" ")?.[0]?.[0]}
          {data?.name?.split(" ")?.[1]?.[0]}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <p className="text-sm font-bold">{data?.name}</p>
        <p className="text-xs font-semibold opacity-50">{data?.email}</p>
      </div>
    </div>
  );
};

export default UserAvatar;
