import { useMemo } from "react";
import { useContactForm } from "../../hooks/useContactForm";
import styles from "./ContactForm.module.css";

interface ContactFormProps {
  setOpen: (open: boolean) => void;
}

export const ContactForm = ({ setOpen }: ContactFormProps) => {
  const { formData, handleChange, handleSubmit, isSubmitting, success, error } =
    useContactForm();

  const memoizedContactForm = useMemo(() => {
    return (
      <div
        className={styles["contact__modal--overlay"]}
        onClick={() => setOpen(false)}
      >
        <div
          className={styles["contact__modal"]}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className={styles["contact__modal--close"]}
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
          <h2>Contact Me</h2>

          {success ? (
            <p className={styles["contact__success"]}>
              Thanks! I'll be in touch soon.
            </p>
          ) : (
            <form
              className={styles["contact__form"]}
              name="contact"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>
              {error && <p className={styles["contact__error"]}>{error}</p>}
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles["contact__submit"]}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }, [
    setOpen,
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    success,
    error,
  ]);

  return memoizedContactForm;
};
