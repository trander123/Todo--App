import { useTodoContext } from "../context/TodoContext";

export const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleTodo } = useTodoContext();

  return (
    <li>
      <label
        htmlFor="toggle"
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        <div className=" px-4 py-2 flex justify-between">
          <div className="flex space-x-2">
            <input
              id="toggle"
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                toggleTodo(todo.name);
              }}
            />
            <span>{todo.name}</span>
          </div>
          <button onClick={() => deleteTodo(todo)}>
            <img className="icons" src="/images/icon-cross.svg" alt="" />
          </button>
        </div>
      </label>
    </li>
  );
};
