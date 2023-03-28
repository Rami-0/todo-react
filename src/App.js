import "./App.css";
import Header from "./components/header/Header";
import Todo from "./components/todo/Todo";
import CreateTodo from "./components/createTodo/CreateTodo";
import { useEffect, useState } from "react";
import Test from "./components/Testa/Test";

const arr = [
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
];
const getData = JSON.parse(localStorage.getItem("todos")) || [];
function App() {
	

	const [todosArray, setTodos] = useState(getData);

	useEffect(()=>{
		localStorage.setItem("todos" , JSON.stringify(todosArray))
	},[todosArray])

	console.log(todosArray);

	const addTodo = (title) => {
		setTodos([...todosArray ,  {
			id: Date.now(),
			title: title,
			status: false,	
		}])
	}
	const onStatusChange = (id) => {
    const newArr = todosArray.map((item) => {
      if(item.id === id) {
        return { ...item, status: !item.status }
      }
      return item
    })
    setTodos(newArr)
  }

  const onEditTodo = (id, newTitle) => {
    const newArr = todosArray.map((item) => {
      if(item.id === id) {
        return {...item, title: newTitle}
      }
      return item
    })
    setTodos(newArr);
  }

	const deleteTodo = (id) => {
		const filteredTodos = todosArray.filter((elem) => elem.id !== id);

		// todosArray.splice(index,1);
		setTodos([...filteredTodos]);
	} 

	const newTodos = todosArray.map((elem, index) => (
		<Todo
			key={elem.id}
			title={elem.title}
			status={elem.status}
			ID={elem.id}
			deleteTodo={deleteTodo}
			onStatusChange={onStatusChange}
      onEditTodo={onEditTodo}
			/>
	));

	return (
		<div className="App">
			<Header
				checked={todosArray.reduce((acc, curr) => acc + curr.status, 0)}
				length={todosArray.length}
			/>
			<div className="content">
				<CreateTodo todosArray={todosArray} setTodos={setTodos} addTodo={addTodo} />
				<div className="todosWrapper">{newTodos}</div>
			</div>
		</div>
		// <Test/>
	);
}

export default App;
