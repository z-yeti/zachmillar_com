import { useDynamicFavicon } from "./hooks/useDynamicFavicon";
import { VFXProvider, VFXSpan } from "react-vfx";

const App: React.FC = () => {
  useDynamicFavicon();
  return (
    <VFXProvider>
      <header>
        <nav className="nav">
          <ul>
            <li>
              <a href="/cv">CV</a>
            </li>
            <li>
              <a
                href="#https://www.linkedin.com/in/zach-millar"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn↗
              </a>
            </li>
            <li>
              <a
                href="https://github.com/z-yeti"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub↗
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <VFXSpan
        shader={"rgbShift"}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "center",
          alignContent: "center",
          height: "100vh",
        }}
      >
        <h1 className="title">Zach Millar | Software Engineer</h1>
        <button className="contact-button">Contact</button>
      </VFXSpan>
    </VFXProvider>
  );
};

export default App;
