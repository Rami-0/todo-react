import { createSlice } from "@reduxjs/toolkit";
const getData = JSON.parse(localStorage.getItem("todos")) || [];

const todoSlice = createSlice({
	name: "todo",
	initialState: {
		data: getData,
		isLoading: false,
	},
	reducers: {
		addTodo: (state, action) => {
			state.data.push({
				id: Date.now(),
				title: action.payload,
				status: false,
			});
		},
		deleteTodo: (state, action) => {
			state.data = state.data.filter((elem) => elem.id !== action.payload);
		},
		editTodo: (state, { payload }) => {
			const { id, title } = payload;
			state.data = state.data.map((item) => {
				if (item.id === id) {
					return { ...item, title: title };
				}
				return item;
			});
		},
		statusChange: (state, { payload }) => {
			state.data = state.data.map((item) => {
				if (item.id === payload) {
					return { ...item, status: !item.status };
				}
				return item;
			});
		},
	},
});
export const { addTodo, deleteTodo, editTodo , statusChange} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
