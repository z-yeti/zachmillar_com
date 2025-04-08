import { ThemeToggle } from "@/components/ThemeToggle";
import { useDynamicFavicon } from "@/hooks/useDynamicFavicon";
import { FC } from "react";
import styles from "./Header.module.css";

export const Header: FC = () => {
  useDynamicFavicon();
  return (
    <header className={styles.header}>
      <a href="/">zach millar | software engineer</a>
      <ThemeToggle />
    </header>
  );
};

export default Header;
