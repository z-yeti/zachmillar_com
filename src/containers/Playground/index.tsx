import { FC, ReactNode } from "react";
import styles from "./Playground.module.css";

interface PlaygroundProps {
  children?: ReactNode;
  description?: string;
  fillPageHeight?: boolean;
  title?: string;
}

export const Playground: FC<PlaygroundProps> = ({
  children,
  description,
  title,
}) => {
  return (
    <div className={styles.playground}>
      {title && <h1>{title}</h1>}
      {description && <p>{description}</p>}
      <div className={styles["playground__content"]}>{children}</div>
    </div>
  );
};
