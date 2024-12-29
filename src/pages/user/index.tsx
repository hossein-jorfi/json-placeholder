import { UserType } from "@/defenitions";
import useFetchData from "@/service/use-fetch-data";
import { useParams } from "react-router";

const User = () => {
  const { userId } = useParams();

  const userQuery = useFetchData<UserType>(["users", userId || ""]);

  if (userQuery.isPending) return "Loading...";

  return (
    <div className="flex justify-center items-center sm:mt-10 xl:mt-20">
      <div className="border-2 rounded-lg w-full md:w-2/3 p-5 space-y-3">
        {userQuery.data?.name}
      </div>
    </div>
  );
};

export default User;
