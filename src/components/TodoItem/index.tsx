import { Todo } from "../../models/Todo";
import "./index.css";

const TodoItem: React.FC<{ todo: Todo; onDelete: (id: string) => void }> = ({
  todo,
  onDelete,
}) => {
  return (
    <li onClick={() => onDelete(todo.id)} className="item">
      {todo.title}
    </li>
  );
};

export default TodoItem;
