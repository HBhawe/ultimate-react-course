export function Reset({ onReset }) {
  return (
    <div className="reset">
      <button onClick={() => onReset()}>Reset</button>
    </div>
  );
}
