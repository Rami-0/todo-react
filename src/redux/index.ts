import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
	reducer: todoReducer,
});

store.subscribe(()=>{ 
  localStorage.setItem("todos", JSON.stringify(store.getState().data));
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
export const AppDispatch: () => typeof store.dispatch = useDispatch
export const AppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector



