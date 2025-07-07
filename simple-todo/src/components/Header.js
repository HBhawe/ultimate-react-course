export function Header({ todosRemaining, children }) {
  return (
    <div className={"header"}>
      <h2>
        {children} <em className={"number"}>({todosRemaining})</em>
      </h2>
      {todosRemaining === 0 ? <h3>All Todo's complete!</h3> : null}
    </div>
  );
}
