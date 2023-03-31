
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import classNames from "classnames";

export default function ToggleButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <button
      className={classNames(
        "rounded-full p-2 bg-yellow-600 transition-colors duration-300",
        {
          "bg-gray-200 dark:bg-gray-700": theme === "light",
          "bg-gray-700 dark:bg-gray-200": theme === "dark",
        }
      )}
      onClick={toggleTheme}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
        className="w-6 h-6"
      >
        {theme === "light" ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 20v-7.5a2.5 2.5 0 015 0V20a2 2 0 01-2 2h-1a2 2 0 01-2-2z"
          />
        )}
      </svg>
    </button>
  );
}