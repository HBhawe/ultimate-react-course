import { useState } from "react";
import { Button } from "./Button";
import { FormAddToDoList } from "./FormAddToDoList";
import { ToDoList } from "./ToDoList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const initialToDos = [
  {
    name: "List 1",
    list: [
      { title: "todo1", isChecked: false },
      { title: "todo2", isChecked: true },
      { title: "todo3", isChecked: false },
    ],
    id: crypto.randomUUID(),
  },
  {
    name: "List 2",
    list: [
      { title: "todo4", isChecked: false },
      { title: "todo5", isChecked: true },
      { title: "todo6", isChecked: true },
    ],
    id: crypto.randomUUID(),
  },
];

function App() {
  // STATES
  const [todos, setTodos] = useState(initialToDos);
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  function handleShowAddToDoList() {
    setShowAddTodo(!showAddTodo);
  }

  function handleAddToDoList(todo) {
    setTodos((todos) => [...todos, todo]);
    setShowAddTodo(false);
  }

  function handleSelection(todo) {
    setSelectedTodo((cur) => (cur?.id === todo.id ? null : todo));
    setShowAddTodo(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <ToDoList
          todos={todos}
          onSelection={handleSelection}
          selectedTodo={selectedTodo}
        />
        {showAddTodo && <FormAddToDoList onAddToDoList={handleAddToDoList} />}
        <Button onHandleClick={handleShowAddToDoList}>
          {showAddTodo ? "Close" : "Add ToDoList"}
        </Button>
      </div>

      <div>{selectedTodo && <ToDoView selectedTodo={selectedTodo} />}</div>
    </div>
  );
}

function ToDoView({ selectedTodo }) {
  return (
    <div className={"tasks"}>
      <ToDo selectedTodo={selectedTodo} />
    </div>
  );
}

function ToDo({ selectedTodo }) {
  const [todoTasks, setTodoTasks] = useState(selectedTodo.list);

  function handleToggleTodo(todo, title) {
    console.log(todo, title);
    // setTodoTasks((todo) =>
    //   todo.map((task) =>
    //     task.title === title ? (todo.isChecked = true) : todo.isChecked,
    //   ),
    // );
  }
  return (
    <div className={"tasks"}>
      {todoTasks.map((task) => (
        <li key={task.title} className={"task-item"}>
          <input
            type="checkbox"
            value={task.isChecked}
            onChange={() => handleToggleTodo(task, task.title)}
          ></input>
          <p>{task.title}</p>
        </li>
      ))}
    </div>
  );
}

export default App;
