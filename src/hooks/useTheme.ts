// hooks/useTheme.ts
import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

interface UseThemeReturn {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeReturn => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("zm-theme") as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme: Theme =
      savedTheme === "dark" || (!savedTheme && prefersDark) ? "dark" : "light";

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = (): void => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("zm-theme", newTheme);
  };

  return { theme, toggleTheme };
};
