import { TodoType } from "@/defenitions";
import useFetchData from "@/service/use-fetch-data";
import TodoCard from "./todo-card";

const Todos = () => {
  const { isPending, error, data } = useFetchData<TodoType[]>(["todos"]);

  if (isPending) return "Loading...";

  return (
    <div>
      {data?.map((todo) => (
        <TodoCard key={todo.id} data={todo} />
      ))}
    </div>
  );
};

export default Todos;
