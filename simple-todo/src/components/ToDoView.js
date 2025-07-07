import { ToDo } from "./ToDo";

export function ToDoView({ todos, onCheckTodo }) {
  return (
    <ul>
      {todos.map((item) => (
        <ToDo todo={item} key={item.id} onCheckTodo={onCheckTodo} />
      ))}
    </ul>
  );
}