import { ThemeToggle } from "@/components/ThemeToggle";
import { FC } from "react";
import { Link } from "react-router";
import styles from "./Header.module.css";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link to="/">zach millar | software engineer</Link>
      <ThemeToggle />
    </header>
  );
};
