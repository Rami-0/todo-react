import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const value: string | null = localStorage.getItem("todos");


// @ts-ignore
const getData = JSON.parse(value); // ok

// if (typeof value === "string") {
// 	var getData = JSON.parse(value); // ok
// }

interface State {
	data: {
		id: number;
		title: string;
		status: boolean;
	}[];
	isLoading: boolean;
}
const initialState: State = {
	data: getData,
	isLoading: false,
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<string>) => {
			if(state.data.length < 12) {
				state.data.push({
					id: Date.now(),
					title: action.payload,
					status: false,
				});
			}else{
				alert("Do your tasks, then think about new ones.")
			}
		},
		deleteTodo: (state, action: PayloadAction<number>) => {
			state.data = state.data.filter((elem) => elem.id !== action.payload);
		},
		editTodo: (
			state,
			{ payload }: PayloadAction<{ id: number; title: string }>
		) => {
			const { id, title } = payload;
			state.data = state.data.map((item) => {
				if (item.id === id) {
					return { ...item, title: title };
				}
				return item;
			});
		},
		statusChange: (state, { payload }: PayloadAction<number>) => {
			state.data = state.data.map((item) => {
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
