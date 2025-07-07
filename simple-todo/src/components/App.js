import { useState } from "react";
import "../App.css";
import { NewTodo } from "./NewTodo";
import { ToDoView } from "./ToDoView";
import { Button } from "./Button";
import { Header } from "./Header";

function App() {
  // STATES
  const [todos, setTodos] = useState([]);
  const [showTodoForm, setShowTodoForm] = useState(false);
  const [todoName, setTodoName] = useState("");

  // DERIVED STATE
  const todosRemaining = todos.filter((todo) => !todo.isChecked).length;

  function handleAddToDo(e) {
    e.preventDefault();

    // guard clause
    if (!todoName) return;

    const newTodo = {
      title: todoName,
      isChecked: false,
      id: crypto.randomUUID(),
    };

    setTodos([...todos, newTodo]);
    setShowTodoForm();
    setTodoName("");
  }

  function handleShowTodoForm() {
    setShowTodoForm(!showTodoForm);
  }

  function handleCheckedTodos(id) {
    const newTodos = todos.map((todo) => {
      if (id === todo.id) {
        todo.isChecked = !todo.isChecked;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <div className={"container"}>
      <Header todosRemaining={todosRemaining}>ToDos</Header>
      <div className="app">
        {showTodoForm || (
          <Button onHandleClick={handleShowTodoForm}>New ToDo</Button>
        )}
        {showTodoForm && (
          <NewTodo
            onSubmit={handleAddToDo}
            name={todoName}
            onTodoChange={setTodoName}
          />
        )}
        <ToDoView todos={todos} onCheckTodo={handleCheckedTodos} />
      </div>
    </div>
  );
}

export default App;
