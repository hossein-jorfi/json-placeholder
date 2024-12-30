import { TodoType, UserType } from "@/defenitions";
import UserAvatar from "./user-avatar";
import { CircleCheck, CircleX } from "lucide-react";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  todo: TodoType;
  user: UserType | undefined;
}

const TodoCard = ({ todo, user }: Props) => {
  return (
    <div className="border-2 p-3 rounded-lg min-h-44 flex flex-col justify-between">
      <div className="flex justify-between">
        <p className="text-sm font-bold text-primary/70"># {todo.id}</p>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <div>
                {todo.completed ? (
                  <CircleCheck className="text-green-600 w-6 h-6" />
                ) : (
                  <CircleX className="text-warning w-6 h-6" />
                )}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{todo.completed ? "Done" : "In Progress"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <p className="font-semibold text-primary/70">{todo.title}</p>
      <UserAvatar data={user} />
    </div>
  );
};

export default TodoCard;
