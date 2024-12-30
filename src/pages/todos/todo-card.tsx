import { TodoType, UserType } from "@/defenitions";
import UserAvatar from "./user-avatar";

interface Props {
  todo: TodoType;
  user: UserType | undefined;
}

const TodoCard = ({ todo, user }: Props) => {
  return (
    <div className="border-2 p-3 rounded-lg min-h-44 flex flex-col justify-between">
      <div className="flex justify-between">
        <p className="text-sm font-bold text-primary/70"># {todo.id}</p>
        <p>{todo.completed ? "Done" : "In Progress"}</p>
      </div>
      <p className="font-semibold text-primary/70">{todo.title}</p>
      <UserAvatar data={user} />
    </div>
  );
};

export default TodoCard;
