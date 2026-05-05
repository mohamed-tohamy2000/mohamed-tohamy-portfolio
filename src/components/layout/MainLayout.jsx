import { AnimatePresence } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../common/ScrollToTop";
import CustomCursor from "../common/CustomCursor";
import SEO from "../common/SEO";

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen">
      <SEO />
      <ScrollToTop />
      <CustomCursor />
      <Navbar />

      <main>
        <AnimatePresence mode="wait">
          <div key={location.pathname}>
            <Outlet />
          </div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

