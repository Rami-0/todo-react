import { useState } from "react";
import css from "./Todo.module.css";

const Todo = ({
	title,
	status,
	ID,
	deleteTodo,
	onStatusChange,
	onEditTodo,
}) => {

	const [isEdit, setEdit] = useState(false);
	const [inputValue, setInputValue] = useState(title);

	const handleEdit = () => {
		setEdit(!isEdit);
	};
	const handleInput = (e) => {
		setInputValue(e.target.value);
	};
	const submit = (e) => {
		e.preventDefault();
		onEditTodo(ID, inputValue);
		setEdit(false);
	};

	// const checked = () => {
	// 	setClick(!isClick);
	// 	todosArray[index].status = !isClick
	// 	setTodos([...todosArray])
	// }
	// console.log(todosArray);

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
						onChange={() => onStatusChange(ID)}
						type="checkbox"
					/>
					<p className={status ? css.compleat : ""}>{title}</p>
				</label>
			)}
			<div>
			<button className={css.button} onClick={handleEdit} >
          Edit
        </button>
				<button className={css.button} onClick={() => deleteTodo(ID)}>
					Del
				</button>
			</div>
		</div>
	);
};

export default Todo;
