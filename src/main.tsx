import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes";
import "./styles/index.css";

import { Toaster } from "@/components/ui/sonner";

import { TokenProvider } from "@/utils/contexts/token";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TokenProvider>
      <App />
      <Toaster position="top-center" richColors />
    </TokenProvider>
  </React.StrictMode>
);
