import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useDynamicFavicon } from "@/hooks/useDynamicFavicon";

const App: React.FC = () => {
  useDynamicFavicon();
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default App;
