import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Page } from "@/components/Page";
import { useDynamicFavicon } from "@/hooks/useDynamicFavicon";
import { trackPageview } from "@/lib/analytics";
import { CV } from "@/routes/CV";
import { Home } from "@/routes/Home";
import "@/styles/index.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

export const AppRouter = () => {
  useDynamicFavicon();

  useEffect(() => {
    trackPageview();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Page>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </Page>
        <Footer />
      </BrowserRouter>
    </>
  );
};
