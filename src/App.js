import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <>
      <div className="container flex flex-col min-h-screen items-center px-5 pt-10">
        <div className="flex flex-col space-y-5 w-full sm:w-md sm:max-w-md">
          <Header/>
          <CreateTodo />
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
