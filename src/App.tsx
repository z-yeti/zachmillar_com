import { Header } from "@/components/Header";
import { useDynamicFavicon } from "@/hooks/useDynamicFavicon";

const App: React.FC = () => {
  useDynamicFavicon();
  return <Header />;
};

export default App;
