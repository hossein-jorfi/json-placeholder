import { TodoType } from "@/defenitions";
import useFetchData from "@/service/use-fetch-data";

const Todos = () => {
  const { isPending, error, data } = useFetchData<TodoType[]>(["todos"]);

  if (isPending) return "Loading...";

  return <div>Todos</div>;
};

export default Todos;
