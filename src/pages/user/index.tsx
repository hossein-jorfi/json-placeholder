import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserType } from "@/defenitions";
import useFetchData from "@/service/use-fetch-data";
import { useParams } from "react-router";
import { InfoItem } from "../users/user-card";
import { MapPin, PhoneCall, AtSign, Globe } from "lucide-react";

const User = () => {
  const { userId } = useParams();

  const userQuery = useFetchData<UserType>(["users", userId || ""]);

  if (userQuery.isPending) return "Loading...";

  return (
    <div className="flex justify-center items-center sm:mt-10 xl:mt-20">
      <div className="border-2 rounded-lg w-full md:w-2/3 p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="" alt="@shadcn" />
            <AvatarFallback>
              {userQuery?.data?.name?.split(" ")?.[0]?.[0]}
              {userQuery?.data?.name?.split(" ")?.[1]?.[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm font-bold">{userQuery?.data?.name}</p>
            <p className="text-xs font-semibold opacity-50">
              {userQuery?.data?.username}
            </p>
          </div>
        </div>

        <div className="text-sm font-semibold mt-1 text-foreground/80 flex flex-col gap-1">
          <InfoItem
            icon={<MapPin className="w-4" />}
            info={userQuery?.data?.address.city}
          />
          <InfoItem
            icon={<AtSign className="w-4" />}
            info={userQuery?.data?.email}
          />
          <InfoItem
            icon={<PhoneCall className="w-4" />}
            info={userQuery?.data?.phone}
          />
          <InfoItem
            icon={<Globe className="w-4" />}
            info={userQuery?.data?.website}
          />
        </div>
      </div>
    </div>
  );
};

export default User;
