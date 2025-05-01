import { FC, ReactNode } from "react";
import styles from "./Page.module.css";

type PageProps = {
  children: ReactNode;
};

export const Page: FC<PageProps> = ({ children }) => {
  return <div className={styles.page}>{children}</div>;
};
