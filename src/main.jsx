import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";  // Importa o componente App (que tem o header, footer, links)
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/PJ-FL">
      <App />
    </BrowserRouter>
  </React.StrictMode>


);


