import React from "react";

export function Button({ handleClick, children, className }) {
  return (
    <button className={`button ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
}