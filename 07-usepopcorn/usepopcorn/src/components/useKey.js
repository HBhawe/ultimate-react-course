import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(() => {
    const callback = function (e) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    };

    document.addEventListener("keydown", (e) => callback(e));

    return function () {
      document.removeEventListener("keydown", (e) => callback(e));
    };
  }, [action, key]);
}
