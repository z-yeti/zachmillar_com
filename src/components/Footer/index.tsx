import { FC } from "react";
import styles from "./Footer.module.css";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <span>&copy; Zach Millar | {new Date().getFullYear()}</span>
      <div>
        <a href="/cv">CV</a>
        <span> | </span>
        <a
          href="https://github.com/z-yeti"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <span> | </span>
        <a
          href="https://www.linkedin.com/in/zach-millar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
