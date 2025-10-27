import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="w-full bg-gray-700 h-screen text-white flex flex-col gap-2  items-center ">
      <h1 className=" mt-10  ">A Todo redux-toolkit app</h1>
      <AddTodo />
      <TodoItem />
    </div>
  );
}

export default App;
