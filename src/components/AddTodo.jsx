import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={input && addTodoHandler} className="space-x-3 mt-10">
      <input
        type="text"
        placeholder="Write your todo here...."
        className="bg-gray-900 px-3 py-1 rounded border-gray-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-700 px-2 py-1 rounded cursor-pointer"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
