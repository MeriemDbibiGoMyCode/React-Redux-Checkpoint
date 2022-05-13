import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: uuidv4(), description: "Mettre ses idées à plat", isDone: true },
    {
      id: uuidv4(),
      description: "Établir un cahier des charges",
      isDone: true,
    },
    { id: uuidv4(), description: "Nom de domaine & Hébergement", isDone: true },
    { id: uuidv4(), description: "Conception Graphique", isDone: true },
    { id: uuidv4(), description: "Développement", isDone: true },
    { id: uuidv4(), description: "Référencement", isDone: true },
  ],
  reducers: {
    //Fonction ajout Task
    add: (state, action) => {
      const newTask = {
        id: uuidv4(),
        description: action.payload,
        isDone: false,
      };
      state.push(newTask);
    },
    //Fonction suppression Task
    deleteTask: (state, action) => {
      return state.filter((e) => e.id !== action.payload);
    },
    //Fonction toggle Task
    toggleTodo: (state, action) => {
      return state.map((e) => {
        if (e.id === action.payload) {
          return { ...e, isDone: !e.isDone };
        } else {
          return e;
        }
      });
    },
    //Fonction edit
    editTodo: (state, action) => {
      const index = state.findIndex((e) => e.id === action.payload);
      state[index].description = prompt("Test");
    },
  },
});

export const { add, deleteTask, toggleTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
