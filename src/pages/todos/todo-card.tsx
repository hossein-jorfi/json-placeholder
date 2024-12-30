import { TodoType } from "@/defenitions";

interface Props {
  data: TodoType;
}

const TodoCard = ({ data }: Props) => {
  return (
    <div className="border-2 p-3 rounded-lg min-h-28">
      <p># {data.id}</p>
      <p>{data.title}</p>
    </div>
  );
};

export default TodoCard;
