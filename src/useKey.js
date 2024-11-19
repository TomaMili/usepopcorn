import { useEffect } from "react";
export function useKey(key, action) {
  // Effect for closing movie with "Esc"
  useEffect(
    function () {
      // Listens for "Escape" and closes selected movie
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) action();
      }
      document.addEventListener("keydown", callback);

      // Cleanup function, removes event listener when new movie selected
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [key, action]
  );
}
