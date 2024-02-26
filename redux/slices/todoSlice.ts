import { createSlice } from "@reduxjs/toolkit";
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
const todoSlice = createSlice({
    name: "todos",
    initialState: [] as Todo[],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            state.push(newTodo);
        },
        deleteTodo: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        editTodo: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);

        }
    },
});
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;