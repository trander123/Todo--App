import { useState } from "react";
import { useTodoContext } from "../context/TodoContext";

export const CreateTodo = () => {
  const [todo, setTodo] = useState({ name: "" });
  const { addTodo } = useTodoContext();

  return (
    <div className="bg-white px-4 py-2 rounded-md">
      <div className="flex justify-between space-x-2.5 items-center">
        <input
          type="text"
          value={todo.name}
          placeholder="Create a new todo.."
          onChange={(e) => setTodo({ name: e.target.value })}
          className=" w-full rounded-md px-2"
        />
        <button
          className="border border-green-300 rounded-full"
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
