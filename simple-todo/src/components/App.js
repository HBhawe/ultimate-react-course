import { useState } from "react";
import "../App.css";

const initialToDos = [
  { title: "todo1", isChecked: false, id: crypto.randomUUID() },
  { title: "todo2", isChecked: true, id: crypto.randomUUID() },
  { title: "todo3", isChecked: false, id: crypto.randomUUID() },
];

function App() {
  // STATES
  const [todos, setTodos] = useState(initialToDos);

  function handleAddToDo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  return (
    <div className={"container"}>
      <Header todos={todos}>ToDos</Header>
      <div className="app">
        <ToDoView todos={todos} />
      </div>
    </div>
  );
}

function Header({ todos, children }) {
  const [todosRemaining, setTodosRemaining] = useState(
    todos.filter((todo) => !todo.isChecked).length,
  );
  // const todosRemaining = ;
  console.log(todosRemaining);
  return <h2>{children}</h2>;
}

function ToDoView({ todos }) {
  return (
    <ul>
      {todos.map((item) => (
        <ToDo todo={item} key={item.id} />
      ))}
    </ul>
  );
}

function ToDo({ todo }) {
  const [checkedState, setCheckedState] = useState(todo.isChecked);

  function handleToggle() {
    setCheckedState(!checkedState);
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={checkedState}
        onChange={() => handleToggle()}
      ></input>
      {todo.title}
    </li>
  );
}

export default App;
