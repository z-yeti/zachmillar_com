import { ContactForm } from "@/components/ContactForm";
import { useState } from "react";
import styles from "./ContactButton.module.css";

export const ContactButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={styles["contact__button"]}
        onClick={() => setOpen(true)}
      >
        Contact Me
      </button>

      {open && <ContactForm setOpen={setOpen} />}
    </>
  );
};
