import { useEffect } from "react";

export function Search({ query, setQuery }) {
  useEffect(() => {
    const element = document.querySelector(".search");
    console.log(element);
    element.focus();
  }, []);
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
