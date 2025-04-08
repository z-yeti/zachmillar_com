import { FC } from "react";
import styles from "./Footer.module.css";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      &copy; Zach Millar - {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
