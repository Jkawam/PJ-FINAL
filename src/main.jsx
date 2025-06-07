import React from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./routes/Routes.jsx"; 
import "./index.css"; // importa o CSS com tailwind

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
