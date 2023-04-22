import { SetStateAction, useState } from "react";
import css from "./Create.module.css";
import { addTodo } from "../../redux/todoSlice";
import { AppDispatch } from "../../redux";

const CreateTodo = () => {
	const [title, setTitle] = useState("");
	const dispatch = AppDispatch();


	const onSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		if (title) {
			dispatch(addTodo(title));
			setTitle("");
		}
	};

	const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
		setTitle(e.target.value);
	};

	return (
		<div>
			<form className={css.form} onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="Enter some todo"
					className={css.input}
					value={title}
					onChange={handleChange}
				/>
				<button className={css.button} type="submit">
					Add
				</button>
			</form>
		</div>
	);
};

export default CreateTodo;
