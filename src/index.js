import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UploadContextProvider } from "./context/UploadContext";
import { FileContextProvider } from "./context/FileContext";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
if (process.env.NODE_ENV === "production") disableReactDevTools();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UploadContextProvider>
      <FileContextProvider>
        <App />
      </FileContextProvider>
    </UploadContextProvider>
  </React.StrictMode>
);
