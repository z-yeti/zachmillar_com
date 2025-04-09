import { ContactButton } from "@/components/ContactButton";
import { FC } from "react";
import styles from "./Home.module.css";

export const Home: FC = () => {
  return (
    <div className={styles.home}>
      <span>Work in Progress</span>
      <span>Always accepting new clients</span>
      <ContactButton />
    </div>
  );
};
