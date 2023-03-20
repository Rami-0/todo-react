import css from "./Create.module.css";

const CreateTodo = () => {

	return (
		<div>
			<form className={css.form} onSubmit={(e)=>e.preventDefault()}>
				<input
					type="text"
					placeholder="Enter some todo"
					className={css.input}
				/>
				<button className={css.button} type="submit">Add</button>
			</form>
		</div>
	);
};

export default CreateTodo;
