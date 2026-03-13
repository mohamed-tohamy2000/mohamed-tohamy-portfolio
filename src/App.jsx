import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import RouterApp from "./app/router";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <RouterApp />
    </BrowserRouter>
  );
}

