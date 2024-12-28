import { UserType } from "@/defenitions";
import useFetchData from "@/service/use-fetch-data";
import UserCard from "./user-card";

const Users = () => {
  const { isPending, error, data } = useFetchData<UserType[]>(["users"]);

  console.log("first");

  if (isPending) return <div>loading</div>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {data?.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default Users;
