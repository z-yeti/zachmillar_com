import { useTheme } from "@/hooks/useTheme";
import styles from "./ThemeToggle.module.css";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles["theme-toggle__button"]} onClick={toggleTheme}>
      <span
        className={
          theme === "light" ? styles["theme-toggle__text--underline"] : ""
        }
      >
        light
      </span>
      <span>|</span>
      <span
        className={
          theme === "dark" ? styles["theme-toggle__text--underline"] : ""
        }
      >
        dark
      </span>
    </button>
  );
};
