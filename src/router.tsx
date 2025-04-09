import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Page } from "@/components/Page";
import { useDynamicFavicon } from "@/hooks/useDynamicFavicon";
import { CV } from "@/routes/CV";
import { Home } from "@/routes/Home";
import "@/styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router";

export const AppRouter = () => {
  useDynamicFavicon();

  return (
    <>
      <Header />
      <Page>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </BrowserRouter>
      </Page>
      <Footer />
    </>
  );
};
