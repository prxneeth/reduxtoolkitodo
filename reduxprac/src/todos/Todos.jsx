// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { removeTodo, updateTodo } from "../app/reduxSlice/todoSlice";

// const Todos = ({ input, setinput }) => {
//   const todos = useSelector((state) => state.todos);
//   const dispatch = useDispatch();

//   function handleEdit(getid, getname) {
//     setinput(getname);
//   }

//   function saveEdit(getid, getname) {
//     dispatch(updateTodo({ id: getid, name: input }));
//     setinput(" ");
//   }
//   return (
//     <div>
//       <h2>todos</h2>
//       {todos.map((todo, i) => (
//         <div key={todo.id}>
//           <p>
//             {todo.name}{" "}
//             <button onClick={() => dispatch(removeTodo(todo.id))}>
//               delete
//             </button>
//             <button onClick={() => handleEdit(todo.id, todo.name)}>edit</button>
//             <button onClick={() => saveEdit(todo.id, todo.name)}>save</button>
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Todos;

// Todos.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../app/reduxSlice/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editInput, setEditInput] = useState("");

  const handleEditClick = (id, currentName) => {
    setEditId(id);
    setEditInput(currentName);
  };

  const handleSaveClick = (id) => {
    if (editInput.trim() === "") {
      alert("Todo name cannot be empty!");
      return;
    }
    dispatch(updateTodo({ id, name: editInput }));
    setEditId(null);
    setEditInput("");
  };

  return (
    <>
      <h1>Todos</h1>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            {editId === todo.id ? (
              <input
                type="text"
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
                className="text-black p-1 rounded"
              />
            ) : (
              <span className="text-white">{todo.name}</span>
            )}

            <div className="flex space-x-2">
              {editId === todo.id ? (
                <button
                  onClick={() => handleSaveClick(todo.id)}
                  className="text-white bg-green-500 border-0 py-1 px-2 focus:outline-none hover:bg-green-600 rounded text-md flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 3.487a2.25 2.25 0 013.182 3.182l-10.5 10.5a2.25 2.25 0 01-1.006.57l-4.2 1.05a.75.75 0 01-.92-.92l1.05-4.2a2.25 2.25 0 01.57-1.006l10.5-10.5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 6.75L17.25 4.5"
                    />
                  </svg>
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEditClick(todo.id, todo.name)}
                  className="text-white bg-blue-500 border-0 py-1 px-2 focus:outline-none hover:bg-blue-600 rounded text-md flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 3.487a2.25 2.25 0 013.182 3.182l-10.5 10.5a2.25 2.25 0 01-1.006.57l-4.2 1.05a.75.75 0 01-.92-.92l1.05-4.2a2.25 2.25 0 01.57-1.006l10.5-10.5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 6.75L17.25 4.5"
                    />
                  </svg>
                  Edit
                </button>
              )}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-md flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
