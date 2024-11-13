// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addTodo } from "../app/reduxSlice/todoSlice";
// import Todos from "./Todos";

// const AddTodo = () => {
//   const [input, setInput] = useState("");
//   const dispatch = useDispatch();

//   const handleAddTodo = (e) => {
//     e.preventDefault();
//     dispatch(addTodo(input));
//     setInput("");
//   };

//   return (
//     <div>
//       <h1>ADDTODO</h1>
//       <form onSubmit={handleAddTodo}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button>add todo</button>
//       </form>
//       <Todos input={input} setinput={setInput} />
//     </div>
//   );
// };

// export default AddTodo;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import {addTodo} from '../features/todo/todoSlice'
import { addTodo } from "../app/reduxSlice/todoSlice";
import Todos from "./Todos";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const addTodoHandler = (e) => {
    if (input.trim() === "") {
      alert("Todo name cannot be empty!");
      return;
    }
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      {" "}
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          {isEdit ? "save" : "add todo"}
        </button>
      </form>
      <Todos input={input} setinput={setInput} setisedit={setIsEdit} />
    </>
  );
}

export default AddTodo;
