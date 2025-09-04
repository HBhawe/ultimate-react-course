import { useEffect, useRef } from "react";

export function Search({ query, setQuery }) {
  // connect ref to dom element with ref prop
  const inputElement = useRef(null);

  // activate the ref with effect to focus it
  useEffect(() => {
    function callback(e) {
      // guard clause
      if (document.activeElement === inputElement.current) {
        return;
      }
      if (e.code === "Enter") {
        inputElement.current.focus();
        setQuery("");
      }
    }
    document.addEventListener("keydown", callback);

    return () => document.addEventListener("keydown", callback);
  }, [setQuery]);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
}
