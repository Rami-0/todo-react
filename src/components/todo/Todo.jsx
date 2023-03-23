import { useState } from "react";
import css from "./Todo.module.css";

const Todo = ({title, status, setTodos , index , todosArray}) => {	

	const [isClick , setClick] = useState(status)
	const checked = () => {
		setClick(!isClick);
		todosArray[index].status = !isClick
		setTodos([...todosArray])
	}
	console.log(todosArray);
	return (
		<div className={css.wrapper}>
			<div className={css.form} action="">
				<input checked={isClick} type="checkbox" name="" id="" onClick={()=>checked()} />
				<p className={isClick ? css.checked :  ""}>{title}</p>
			</div>
			<div>
				<button className={css.button}>Edit</button>
				<button className={css.button}>Del</button>
			</div>
		</div>
	); 	
};

export default Todo;
