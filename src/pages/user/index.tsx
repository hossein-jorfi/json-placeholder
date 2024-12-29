import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserType } from "@/defenitions";
import useFetchData from "@/service/use-fetch-data";
import { useParams } from "react-router";
import { InfoItem } from "../users/user-card";
import { MapPin, PhoneCall, AtSign, Globe, Trash2, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const User = () => {
  const { userId } = useParams();

  const userQuery = useFetchData<UserType>(["users", userId || ""]);

  const clickHandler = () => {
    toast("Action Not Available !", {
      action: {
        label: "Close",
        onClick: () => {},
      },
      description:
        "This website using a fake REST API and Database Mutaions cant be done",
    });
  };

  if (userQuery.isPending) return "Loading...";

  return (
    <div className="flex justify-center items-center sm:mt-10 xl:mt-20">
      <div className="border-2 rounded-lg w-full md:w-2/3 p-5 space-y-3">
        <div className="flex justify-between gap-2">
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

          <div className="flex items-center gap-2">
            <Button size="icon" variant="warning" onClick={clickHandler}>
              <Pencil />
            </Button>
            <Button size="icon" variant="destructive" onClick={clickHandler}>
              <Trash2 />
            </Button>
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
