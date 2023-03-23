import "./App.css";
import Header from "./components/header/Header";
import Todo from "./components/todo/Todo";
import CreateTodo from "./components/createTodo/CreateTodo";
import { useEffect, useState } from "react";
import Test from "./components/Testa/Test";



function App() {
	const [todosArray, setTodos] = useState([
		{
			id: 1,
			title: "buy orange",
			status: true,
		},
		{
			id: 2,
			title: "buy Apple",
			status: true,
		},
		{
			id: 3,
			title: "buy Banane",
			status: false,
		},
		{
			id: 4,
			title: "buy Tomato",
			status: true,
		},
	]);
console.log(todosArray);

	const newTodos = todosArray.map((elem , index) => (
		<Todo title={elem.title} status={elem.status} setTodos={setTodos} index={index} todosArray={todosArray}/>
	));
	return (
		<div className="App">
			<Header
				checked={todosArray.reduce((acc, curr) => acc + curr.status, 0)}
				length={todosArray.length}
			/>
			<div className="content">
				<CreateTodo todosArray={todosArray} setTodos={setTodos}/>
				<div className="todosWrapper">{newTodos}</div>
			</div>
		</div>
		// <Test/>
	);
}

export default App;
