import { UserType } from "@/defenitions";
import useFetchData from "@/service/use-fetch-data";
import UserCard from "./user-card";

const Users = () => {
  const { isPending, error, data } = useFetchData<UserType[]>(["users"]);

  if (isPending) return <div>loading</div>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
      {data?.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default Users;
