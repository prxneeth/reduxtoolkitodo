import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../reduxSlice/todoSlice'



export const store = configureStore({
    reducer: todoReducer
})

