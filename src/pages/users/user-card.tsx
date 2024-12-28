import { UserType } from "@/defenitions";

const UserCard = ({ name }: UserType) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default UserCard;
