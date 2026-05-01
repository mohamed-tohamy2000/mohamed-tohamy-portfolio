import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import RouterApp from "./app/router";
import InitialLoader from "./components/common/InitialLoader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loaderTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1900);

    return () => window.clearTimeout(loaderTimer);
  }, []);

  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <RouterApp />
      <AnimatePresence>{isLoading && <InitialLoader />}</AnimatePresence>
    </BrowserRouter>
  );
}
