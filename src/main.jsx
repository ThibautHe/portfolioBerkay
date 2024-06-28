import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./CSS/index.css";
import { ThemeContextProvider } from "./Hooks/useColorTheme.jsx";
import { Demo } from "./Components/ApiFetch.tsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*
      <Demo/>
*/}
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
