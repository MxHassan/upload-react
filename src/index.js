import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UploadContextProvider } from "./context/UploadContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UploadContextProvider>
      <App />
    </UploadContextProvider>
  </React.StrictMode>
);
