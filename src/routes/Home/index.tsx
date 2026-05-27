import { ContactButton } from "@/components/ContactButton";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router";
import styles from "./Home.module.css";

const ALL_SKILLS = [
  "html",
  "css",
  "javascript",
  "typescript",
  "react",
  "vue",
  "svelte",
  "scss",
  "styled-components",
  "tailwind",
  "material-design",
  "redux",
  "redux-toolkit",
  "rtk-query",
  "mobx",
  "jest",
  "react-testing-library",
  "msw",
  "playwright",
  "cypress",
  "node.js",
  "express",
  "python",
  "django",
  "flask",
  "rest",
  "graphql",
  "mysql",
  "sqlite",
  "git",
  "rollup",
  "storybook",
  "webpack",
  "docker",
  "github-actions",
  "ai-coding-agents",
  "segment",
  "google-analytics",
  "google-tag-manager",
];

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const useTerminalTyper = (words: string[]) => {
  const [text, setText] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const wordIdx = useRef(0);
  const current = useRef("");

  useEffect(() => {
    // Reset on (re)mount so React Strict Mode double-invoke is clean
    current.current = "";
    wordIdx.current = 0;
    setText("");
    setHistory([]);

    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (!words.length) return;
      const word = words[wordIdx.current % words.length];

      if (current.current.length < word.length) {
        current.current = word.slice(0, current.current.length + 1);
        setText(current.current);
        setIsTyping(true);
        timer = setTimeout(tick, 90);
      } else {
        // Fully typed — pause, then "execute"
        setIsTyping(false);
        timer = setTimeout(() => {
          setHistory([current.current]); // always exactly 1 history entry
          current.current = "";
          setText("");
          wordIdx.current += 1;
          timer = setTimeout(tick, 500);
        }, 1400);
      }
    };

    timer = setTimeout(tick, 800);
    return () => clearTimeout(timer);
  }, [words]);

  return { text, history, isTyping };
};

export const Home: FC = () => {
  const skills = useMemo(() => shuffle(ALL_SKILLS), []);
  const { text, history, isTyping } = useTerminalTyper(skills);
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <span className={styles.greeting}>&gt; hello, I'm</span>
        <h1 className={styles.name}>Zach Millar</h1>
        <p className={styles.title}>Staff Front-End Software Engineer</p>

        <div className={styles.terminal}>
          <div className={styles.history}>
            {history.map((cmd, i) => (
              <p key={i} className={styles.historyLine}>
                <span className={styles.promptPath}>~/zach_millar</span>
                <span className={styles.promptArrow}>&nbsp;&gt;&nbsp;</span>
                <span className={styles.promptSlash}>/</span>
                <span>{cmd}</span>
              </p>
            ))}
          </div>
          <p className={styles.prompt}>
            <span className={styles.promptPath}>~/zach_millar</span>
            <span className={styles.promptArrow}>&nbsp;&gt;&nbsp;</span>
            <span className={styles.promptSlash}>/</span>
            <span>{text}</span>
            <span className={`${styles.cursor}${isTyping ? ` ${styles.cursorActive}` : ""}`}>█</span>
          </p>
        </div>

        <p className={styles.bio}>
          9+ years building React apps at scale <br />
          component libraries, e-commerce platforms, data-heavy interfaces
        </p>

        <div className={styles.actions}>
          <Link to="/cv" className={styles.ctaPrimary}>
            View CV
          </Link>
          <ContactButton />
        </div>
      </div>

      <div className={styles.featured}>
        <span className={styles.sectionLabel}>// featured</span>
        <a
          href="https://leaftrade.github.io/leaftrade-storybook/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.featuredCard}
        >
          <span className={styles.featuredTitle}>LeafTrade Component Library ↗</span>
          <span className={styles.featuredMeta}>React component library · public Storybook</span>
        </a>
      </div>
    </div>
  );
};
