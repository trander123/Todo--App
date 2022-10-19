import { useEffect, useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import { Filters } from "./Filters";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todos } = useTodoContext();
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(todos);
  }, [todos]);

  const completed = () => {
    setList(todos.filter((i) => i.completed === true))
  }
  const active = () => {
    setList(todos.filter((i) => i.completed === false))
  }

  const all = () => {
    setList(todos)
  }

  return (
    <div className="flex flex-col">
      <div className="bg-white rounded-t-md h-40 overflow-y-auto">
        <ul className="">
          {list.map((todo) => (
            <TodoItem todo={todo} key={todo.name}></TodoItem>
          ))}
        </ul>
      </div>
      <Filters all={all} active={active} completed={completed}/>
    </div>
  );
};
