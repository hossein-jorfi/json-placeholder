import { TodoType, UserType } from "@/defenitions";
import useFetchData from "@/service/use-fetch-data";
import TodoCard from "./todo-card";

const Todos = () => {
  const { isPending, error, data } = useFetchData<TodoType[]>(["todos"]);
  const userQuery = useFetchData<UserType[]>(["users"]);

  if (isPending || userQuery.isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {data?.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          user={userQuery?.data?.find((user) => user.id == todo.userId)}
        />
      ))}
    </div>
  );
};

export default Todos;
