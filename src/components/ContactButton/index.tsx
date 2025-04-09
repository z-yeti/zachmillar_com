import { useState } from "react";
import { useContactForm } from "../../hooks/useContactForm";
import styles from "./ContactButton.module.css";

export const ContactButton = () => {
  const [open, setOpen] = useState(false);
  const { formData, handleChange, handleSubmit, isSubmitting, success, error } =
    useContactForm();

  return (
    <>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        hidden
        netlify-honeypot="bot-field"
      >
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
      </form>

      <button
        className={styles["contact__button"]}
        onClick={() => setOpen(true)}
      >
        Contact Me
      </button>

      {open && (
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
              <form onSubmit={handleSubmit} className={styles["contact__form"]}>
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
      )}
    </>
  );
};
