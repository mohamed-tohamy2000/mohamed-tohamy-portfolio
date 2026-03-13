import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "../../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="theme-toggle-btn btn btn-sm btn-circle"
    >
      {theme === "devdark" ? <BsSunFill size={14} /> : <BsMoonStarsFill size={14} />}
    </button>
  );
}
