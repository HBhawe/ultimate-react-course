export function BillInput({ bill, children, setBill }) {
  return (
    <div className="bill">
      <p>{children}</p>
      <input
        type={"number"}
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        placeholder={"Bill value"}
      ></input>
    </div>
  );
}
