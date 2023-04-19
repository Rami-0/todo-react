import "./App.css";
import Header from "./components/header/Header";
import Todo from "./components/todo/Todo";
import CreateTodo from "./components/createTodo/CreateTodo";
import { useSelector } from "react-redux";

function App() {

	const todosArray = useSelector((state) => state.data);
	console.log(todosArray);


	const newTodos = todosArray.map((elem, index) => (
		<Todo
			key={elem.id}
			title={elem.title}
			status={elem.status}
			ID={elem.id}
		/>
	));

	return (
		<div className="App">
			<Header
				checked={todosArray.reduce((acc, curr) => acc + curr.status, 0)}
				length={todosArray.length}
			/>
			<div className="content">
				<CreateTodo />
				<div className="todosWrapper">{newTodos}</div>
			</div>
		</div>
		// <Test/>
	);
}

export default App;
