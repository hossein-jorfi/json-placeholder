import { ReactNode } from "react";
import { UserType } from "@/defenitions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, PhoneCall, AtSign, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const UserCard = ({
  id,
  name,
  email,
  address,
  phone,
  username,
  website,
}: UserType) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`detail/${id}`);
  };

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
          <p className="text-xs font-semibold opacity-50">{username}</p>
        </div>
      </div>

      <div className="text-sm font-semibold mt-1 text-foreground/80 flex flex-col gap-1">
        <InfoItem icon={<MapPin className="w-4" />} info={address.city} />
        <InfoItem icon={<AtSign className="w-4" />} info={email} />
        <InfoItem icon={<PhoneCall className="w-4" />} info={phone} />
        <InfoItem icon={<Globe className="w-4" />} info={website} />
      </div>

      <Button variant="secondary" onClick={navigateHandler}>
        Detail
      </Button>
    </div>
  );
};

export default UserCard;

export const InfoItem = ({
  icon,
  info,
}: {
  info: string | undefined;
  icon: ReactNode;
}) => {
  return (
    <div className="flex gap-1 items-center">
      {icon}
      <p>{info}</p>
    </div>
  );
};
