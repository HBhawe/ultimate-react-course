import { ToDo } from "./ToDo";

export function ToDoList({ todos, onSelection, selectedTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDo
          todo={todo}
          onSelection={onSelection}
          selectedFriend={selectedTodo}
          key={todo.id}
        />
      ))}
    </ul>
  );
}
