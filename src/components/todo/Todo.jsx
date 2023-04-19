import { useState } from "react";
import css from "./Todo.module.css";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, statusChange } from "../../redux/todoSlice";

const Todo = ({ title, status, ID, onStatusChange }) => {
	const [isEdit, setEdit] = useState(false);
	const [inputValue, setInputValue] = useState(title);
	const dispatch = useDispatch();

	const handleEdit = () => {
		setEdit(!isEdit);
	};
	const handleInput = (e) => {
		setInputValue(e.target.value);
	};
	const submit = (e) => {
		e.preventDefault();
		dispatch(editTodo({ title: inputValue, id: ID }));
		setEdit(false);
	};
	const handelStatus = () => {
		dispatch(statusChange(ID));
	};

	return (
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
	);
};

export default Todo;
