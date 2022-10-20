import { useEffect, useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import { Filters } from "./Filters";
import { TodoItem } from "./TodoItem";
import { TodoStats } from "./TodoStats";

export const TodoList = () => {
  const { todos } = useTodoContext();
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(todos);
  }, [todos]);

  const completed = () => {
    setList(todos.filter((i) => i.completed === true));
  };
  const active = () => {
    setList(todos.filter((i) => i.completed === false));
  };

  const all = () => {
    setList(todos);
  };

  return (
    <div className="flex flex-col">
      <div className="bg-white dark:bg-gradient-to-tr from-indigo-800 to-pink-700  rounded-t-md h-80 overflow-y-auto sm:h-96 shadow-2xl">
        <ul>
          {list.map((todo) => (
            <TodoItem todo={todo} key={todo.name}></TodoItem>
          ))}
        </ul>
      </div>
      <TodoStats/>
      <Filters all={all} active={active} completed={completed} />
    </div>
  );
};
