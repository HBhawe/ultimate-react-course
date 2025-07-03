export function Bill({ bill, children, setBill }) {
  return (
    <div className="bill">
      <p>{children}</p>
      <input
        type={"number"}
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>
    </div>
  );
}
