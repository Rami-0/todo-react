import { useState } from "react";
import css from "./Create.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";

const CreateTodo = () => {
	const [title, setTitle] = useState("");
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();
		if (title) {
			dispatch(addTodo(title));
			setTitle("");  
		}
	};

	const handleChange = (e) => {
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
