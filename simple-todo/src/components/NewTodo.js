import { Button } from "./Button";
export function NewTodo({ onSubmit, todoName, onTodoChange }) {
  return (
    <div className={"form"}>
      <form onSubmit={(e) => onSubmit(e, todoName)}>
        <label>New ToDo:</label>
        <input
          type="text"
          value={todoName}
          onChange={(e) => onTodoChange(e.target.value)}
          autoFocus
        />
        <Button>Save</Button>
      </form>
    </div>
  );
}
