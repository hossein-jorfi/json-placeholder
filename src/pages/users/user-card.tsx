import { UserType } from "@/defenitions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin } from "lucide-react";

const UserCard = ({ name, email, address }: UserType) => {
  return (
    <div className="border p-4 rounded-lg flex flex-col gap-3 justify-between">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="" alt="@shadcn" />
          <AvatarFallback>
            {name?.split(" ")?.[0]?.[0]}
            {name?.split(" ")?.[1]?.[0]}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="text-sm font-bold">{name}</p>
          <p className="text-xs font-semibold opacity-50">{email}</p>
        </div>
      </div>

      <div className="text-sm font-semibold mt-1 text-foreground/80">
        <div className="flex gap-1 items-center">
          <MapPin  className="w-4"/>
          <p>{address.city}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
