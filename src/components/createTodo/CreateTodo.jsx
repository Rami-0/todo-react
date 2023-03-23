import { useState } from "react";
import css from "./Create.module.css";

const CreateTodo = ({todosArray , setTodos}) => {
	const [label , setTitle] = useState("")

	const data = {
		title:label,
		id:todosArray.length + 1,
		status:false
	}

	const onSubmit = (e) => {
		e.preventDefault();
		setTodos([...todosArray, data])
		setTitle("")
	}

	return (
		<div>
			<form className={css.form} onSubmit={(e) => onSubmit(e)}>
				<input
					type="text"
					placeholder="Enter some todo"
					className={css.input}
					value={label}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<button className={css.button} type="submit">Add</button>
			</form>
		</div>
	);
};

export default CreateTodo;
