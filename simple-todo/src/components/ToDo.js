import { Button } from "./Button";

export function ToDo({ todo, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === todo.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <h3>{todo.name}</h3>
      <Button onHandleClick={() => onSelection(todo)}>
        {isSelected ? "Close" : " Select"}
      </Button>
    </li>
  );
}
