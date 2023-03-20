import css from "./Todo.module.css";

const Todo = (props) => {
	return (
		<div className={css.wrapper}>
			<div className={css.form} action="">
				<input checked={props.status} type="checkbox" name="" id="" />
				<p className={props.status ? css.checked :  ""}>{props.title}</p>
			</div>
			<div>
				<button className={css.button}>Edit</button>
				<button className={css.button}>Del</button>
			</div>
		</div>
	);
};

export default Todo;
