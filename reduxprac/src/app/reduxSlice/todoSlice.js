

import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                name: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id ? { ...todo, name: action.payload.name } : todo
            );
        }
    }
})



export const { addTodo, removeTodo, updateTodo } = todoSlice.actions


export default todoSlice.reducer