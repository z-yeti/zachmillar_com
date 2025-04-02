import { useDynamicFavicon } from "./hooks/useDynamicFavicon";

const App: React.FC = () => {
  useDynamicFavicon();
  return (
    <>
      <h1>Zach Millar | Software Engineer</h1>
    </>
  );
};

export default App;
