import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoType } from "./../types/types";

const value: string | null = localStorage.getItem("todos");

// @ts-ignore
const getData = JSON.parse(value); // ok

// if (typeof value === "string") {
// 	var getData = JSON.parse(value); // ok
// }

interface State {
	data: TodoType[];
	isLoading: boolean;
}
const initialState = {
	data: getData,
	isLoading: false,
} as State;

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<string>) => {
			if (state.data.length < 12) {
				state.data.push({
					id: Date.now(),
					title: action.payload,
					status: false,
				});
			} else {
				alert("Do your tasks, then think about new ones.");
			}
		},
		deleteTodo: (state, action: PayloadAction<number>) => {
			state.data = state.data.filter((elem: TodoType) => elem.id !== action.payload);
		},
		editTodo: (
			state,
			{ payload }: PayloadAction<{ id: number; title: string }>
		) => {
			const { id, title } = payload;
			state.data = state.data.map((item : TodoType) => {
				if (item.id === id) {
					return { ...item, title: title };
				}
				return item;
			});
		},
		statusChange: (state, { payload }: PayloadAction<number>) => {
			state.data = state.data.map((item: TodoType) => {
				if (item.id === payload) {
					return { ...item, status: !item.status };
				}
				return item;
			});
		},
	},
});
export const { addTodo, deleteTodo, editTodo, statusChange } =
	todoSlice.actions;
export const todoReducer = todoSlice.reducer;
