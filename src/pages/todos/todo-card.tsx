import { TodoType, UserType } from "@/defenitions";

interface Props {
  todo: TodoType;
  user: UserType;
}

const TodoCard = ({ todo, user }: Props) => {
  return (
    <div className="border-2 p-3 rounded-lg min-h-28">
      <p className="text-sm font-bold text-primary/70"># {todo.id}</p>
      <p className="font-semibold text-primary/70">{todo.title}</p>
    </div>
  );
};

export default TodoCard;
