export function ToDo({ todo, onCheckTodo }) {
  // DERIVED STATE FROM PARENT
  const checkedState = todo.isChecked;

  return (
    <li className={checkedState ? "strikethrough" : ""}>
      <input
        type="checkbox"
        checked={checkedState}
        onChange={() => onCheckTodo(todo.id)}
      ></input>
      {todo.title}
    </li>
  );
}
