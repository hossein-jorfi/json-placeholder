import { useParams } from "react-router";

const User = () => {
  const { userId } = useParams();

  return <div>User # {userId}</div>;
};

export default User;
