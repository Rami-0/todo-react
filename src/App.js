import "./App.css";
import Header from "./components/header/Header";
import Todo from "./components/todo/Todo";
import CreateTodo from "./components/createTodo/CreateTodo";

const todosArray = [ 
	{
		id: 1,
		title : "buy orange", 
		status: true
	},
	{
		id: 2,
		title : "buy Apple", 
		status: true
	},
	{
		id: 3,
		title : "buy Banane", 
		status: false
	},
	{
		id: 4,
		title : "buy Tomato", 
		status: true
	}
]
function App() {
	const newTodos = todosArray.map(elem => <Todo title={elem.title} status={elem.status}/>) 

	return (
		<div className="App">
			<Header checked={ todosArray.reduce((acc, curr) => acc + curr.status , 0 ) } length={todosArray.length}/>
			<div className="content">
				<CreateTodo />
				<div className="todosWrapper">
					{newTodos}
				</div>
			</div>
		</div>
	);
}

export default App;
