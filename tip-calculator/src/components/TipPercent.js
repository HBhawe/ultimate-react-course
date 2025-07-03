export function TipPercent({ tip, changeTip, children }) {
  return (
    <div className="tip">
      <p>{children}</p>
      <select value={tip} onChange={(e) => changeTip(Number(e.target.value))}>
        <option value={""}>Choose an option</option>
        <option value={0}>Terrible (0%)</option>
        <option value={5}>Okay (5%)</option>
        <option value={10}>Good (10%)</option>
        <option value={20}>Excellent (20%)</option>
      </select>
    </div>
  );
}
