import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AddressContextProvider } from "./hooks/useAddress";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AddressContextProvider>
    <App />
  </AddressContextProvider>
);
