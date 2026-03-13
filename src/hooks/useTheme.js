import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || "devdark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "devdark" ? "light" : "devdark"));
  };

  return { theme, toggleTheme };
}

