import { useEffect, useRef } from "react";

export function Search({ query, setQuery }) {
  // connect ref to dom element with ref prop
  const inputElement = useRef(null);

  // activate the ref with effect to focus it
  useEffect(() => {
    inputElement.current.focus();
  }, []);
  // useEffect(() => {
  //   const element = document.querySelector(".search");
  //   console.log(element);
  //   element.focus();
  // }, []);

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
