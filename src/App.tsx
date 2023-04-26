import "./App.css";
import Header from "./components/header/Header";
import Todo from "./components/todo/Todo";
import CreateTodo from "./components/createTodo/CreateTodo";
import { AppSelector, AppDispatch } from "./redux/index";
import React from "react";

function App() {

	// const todosArray = useSelector((state: RootState) => state.data);
	const todosArray = AppSelector((state) => state.data);
	console.log(todosArray);


	const newTodos = todosArray.map((elem) => (
		<Todo key={elem.id} {...elem} />
	));

	return (
		<div className="App">
			<Header
				checked={todosArray.reduce((acc, curr) => acc + Number(curr.status), 0)}
				length={todosArray.length}
			/>
			<div className="content">
				<CreateTodo />
				<div className="todosWrapper">
					{newTodos}
				</div>
			</div>
		</div>
		// <Test/>
	);
}

export default App;
