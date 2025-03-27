import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToDoTask } from '../../models/ToDoTask';


interface ToDoState {
  toDoList: ToDoTask[];
}

const initialState: ToDoState = {
  toDoList: [],
};

const toDoSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<ToDoTask>) => {
      state.toDoList.push(action.payload);
    },
    removeToDo: (state, action: PayloadAction<string>) => {
      state.toDoList = state.toDoList.filter(task => task.id !== action.payload);
    },
    toggleToDoCompletion: (state, action: PayloadAction<string>) => {
      const task = state.toDoList.find(task => task.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
    editToDo: (state, action: PayloadAction<{ id: string; updatedName: string }>) => {
      const task = state.toDoList.find(task => task.id === action.payload.id);
      if (task) {
        task.name = action.payload.updatedName;
      }
    }
  }
});


export const selectCompletedTaskCount = (state: { toDo: ToDoState }) => 
  state.toDo.toDoList.filter(task => task.isCompleted).length;

export const { addToDo, removeToDo, toggleToDoCompletion,editToDo } = toDoSlice.actions;
export default toDoSlice.reducer;
