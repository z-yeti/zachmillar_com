import { ThemeToggle } from "@/components/ThemeToggle";
import { FC } from "react";
import styles from "./Header.module.css";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <a href="/">zach millar | software engineer</a>
      <ThemeToggle />
    </header>
  );
};

export default Header;
