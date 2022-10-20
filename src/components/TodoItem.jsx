import { useTodoContext } from "../context/TodoContext";

export const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleTodo } = useTodoContext();

  return (
    <li className="border-b border-indigo-100 dark:border-indigo-700">
      <label
        htmlFor={todo.name}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        <div className=" px-4 py-2 flex justify-between">
          <div className="flex space-x-2">
            <input
              id={todo.name}
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                toggleTodo(todo.name);
              }}
            />
            <span className={todo.completed ? " text-indigo-200 dark:text-indigo-700": ""}>{todo.name}</span>
          </div>
          <button onClick={() => deleteTodo(todo)}>
            <img className="icons" src="/images/icon-cross.svg" alt="" />
          </button>
        </div>
      </label>
    </li>
  );
};
