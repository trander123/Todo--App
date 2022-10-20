import React from "react";
import { useTodoContext } from "../context/TodoContext";

export const TodoStats = () => {
  const { todosLeft, deleteCompleted } = useTodoContext();
  return (
    <div className="flex flex-row justify-between bg-white dark:bg-slate-800 px-4 py-3.5 rounded-b-md shadow-2xl text-indigo-300 text-sm">
      <span>
        {todosLeft() ? `${todosLeft()} item/s left` : "0 item/s left"}
      </span>
      <button onClick={() => deleteCompleted()}>Clear Completed</button>
    </div>
  );
};
