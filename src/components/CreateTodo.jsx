import { useState } from "react";
import { useTodoContext } from "../context/TodoContext";

export const CreateTodo = () => {
  const [todo, setTodo] = useState({ name: ""})
  const { addTodo } = useTodoContext()

  return (
    <div className="bg-white px-4 py-2 rounded-md">
      <div className="flex justify-between">
        <input type="text" value={todo.name} placeholder="Create new todo"
          onChange={(e) => setTodo({name: e.target.value })}
        />
        <button onClick={() => {
          addTodo(todo);
          setTodo({ name: "" })
        }}>+</button>
      </div>
    </div>
  );
};
