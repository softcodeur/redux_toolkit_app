import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, text: "Task 1", done: true },
  { id: 1, text: "Task 2", done: false },
];
const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      //{type: 'todo/addTask', payload: 'text'}
      state.push(action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.find((t) => t.id === action.payload);
      task.done = !task.done;
    },
    deleteTask: (state, action) => {
       state = state.filter(t=>t.id !== action.payload)
       return state;
    },
  },
});

export const store = configureStore(
  {
      reducer:{
          todo: todoSlice.reducer
      }
  }
)


export const {addTask, toggleTask, deleteTask} = todoSlice.actions;
