import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, statusChange } from "../../redux/todoSlice";
import css from "./Todo.module.css"
import React from "react";
import { AppDispatch } from "../../redux";

type Props = {
	ID: number,
	title: string,
	status: boolean,
}

const Todo = ({ title, status, ID }: Props) => {
	const [isEdit, setEdit] = useState(false);
	const [inputValue, setInputValue] = useState(title ? title : "");
	const dispatch = AppDispatch();

	const handleEdit = () => {
		setEdit(!isEdit);
	};
	const handleInput = (e: { target: { value: React.SetStateAction<string>; }; }) => {
		setInputValue(e.target.value);
	};
	const submit = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		dispatch(editTodo({ title: inputValue, id: ID }));
		setEdit(false);
	};
	const handelStatus = (ID: number) => {
		dispatch(statusChange(ID));
	};

	return (
		<>
			<div className={css.wrapper}>
				{isEdit ? (
					<form onSubmit={submit}>
						<input value={inputValue} onChange={handleInput} type="text" />
						<button>Save</button>
					</form>
				) : (
					<label>
						<input
							checked={status}
							onChange={() => handelStatus(ID)}
							type="checkbox"
						/>
						<p className={status ? css.compleat : ""}>{title}</p>
					</label>
				)}
				<div>
					<button className={css.button} onClick={handleEdit}>
						Edit
					</button>
					<button className={css.button} onClick={() => dispatch(deleteTodo(ID))}>
						Del
					</button>
				</div>
			</div>
		</>
	);
};

export default Todo;
