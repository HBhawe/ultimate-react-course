import React from "react";

export default function Stats({ items }) {
  // early return
  if (!items.length) {
    return <p className={"stats"}>Start adding some items to your list</p>;
  }
  // DERIVED STATE
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percent = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You have packed all items on your list. Happy travels! ✈️"
          : `You have ${numItems} items on your list and you have packed 
        ${packedItems} (${percent}%)`}
      </em>
    </footer>
  );
}
