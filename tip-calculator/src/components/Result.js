export function Result({ total, bill }) {
  return (
    <div className="result">
      <h2>
        You pay ${total} (${bill} + ${total - bill} tip)
      </h2>
    </div>
  );
}
