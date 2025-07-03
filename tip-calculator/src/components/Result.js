export function Result({ total, bill }) {
  return (
    <div className="result">
      <h1>
        You pay ${total} (${bill ? bill : 0} + ${total - bill} tip)
      </h1>
    </div>
  );
}
