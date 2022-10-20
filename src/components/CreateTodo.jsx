import { useState } from "react";
import { useTodoContext } from "../context/TodoContext";

export const CreateTodo = () => {
  const [todo, setTodo] = useState({ name: "" });
  const { addTodo } = useTodoContext();

  return (
    <div className="bg-white dark:bg-gradient-to-tr from-indigo-900 to-pink-700 px-4 py-2 rounded-md">
      <div className="flex justify-between space-x-2.5 items-center">
        <input
          type="text"
          value={todo.name}
          placeholder="Create a new todo.."
          onChange={(e) => setTodo({ name: e.target.value })}
          className=" w-full rounded-md px-2 bg-transparent"
        />
        <button
          className="border border-indigo-100 dark:border-indigo-700 rounded-full"
          onClick={() => {
            addTodo(todo);
            setTodo({ name: "" });
          }}
        >
          <span className=" text-lg p-2">+</span>
        </button>
      </div>
    </div>
  );
};
