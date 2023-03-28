import { useState } from "react";
import css from "./Create.module.css";

const CreateTodo = ({addTodo}) => {
	const [title , setTitle] = useState("")

	const onSubmit = (e) => {
		e.preventDefault();
		if(title){
			addTodo(title)
			setTitle('')
		}
	}
	const handleChange = (e) => {
		setTitle(e.target.value)
	}

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
				<button className={css.button} type="submit">Add</button>
			</form>
		</div>
	);
};

export default CreateTodo;
