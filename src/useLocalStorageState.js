import { useState, useEffect } from "react";

export function useLocalStorageState(initalState, key) {
  // Loading watched movies from local storage, only on initial render
  // Must parse value because it's stored as a string
  // Callback function, pure function, no arguments to work
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initalState;
  });

  // Storing watched movies to local storage, must be stored as a string
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
