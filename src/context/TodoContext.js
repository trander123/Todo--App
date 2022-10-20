import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext({});

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  //Add todo with validations
  const addTodo = (todo) => {
    if (todo.name === "") return;
    if (todos.find((i) => i.name === todo.name)) return;
    setTodos([...todos, { ...todo, completed: false }]);
  };
  //Delete certain todo
  const deleteTodo = (todo) => {
    setTodos([...todos].filter((i) => i !== todo));
  };
  //Delete all todos with completed property is true
  const deleteCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed !== true));
  };
  //Simply displays the number of unfinished todos
  const todosLeft = () => {
    const uncompletedTodos = todos.filter((i) => i.completed === false);
    return uncompletedTodos.length;
  };
  //toggles the todo status from completed: true to false or false to true
  const toggleTodo = (text) => {
    setTodos(
      todos.map((todo) => {
        if (todo.name === text) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <>
      <TodoContext.Provider
        value={{
          todos,
          todosLeft,
          addTodo,
          deleteTodo,
          toggleTodo,
          deleteCompleted,
        }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
};