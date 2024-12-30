import { TodoType } from "@/defenitions";

interface Props {
  data: TodoType;
}

const TodoCard = ({ data }: Props) => {
  return <div>{data.title}</div>;
};

export default TodoCard;
