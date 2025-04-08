import { ThemeToggle } from "@/components/ThemeToggle";
import { useDynamicFavicon } from "@/hooks/useDynamicFavicon";

const App: React.FC = () => {
  useDynamicFavicon();
  return (
    <header>
      <ThemeToggle />
    </header>
  );
};

export default App;
