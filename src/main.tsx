import React from "react";
import "./layout/styles.css";
import { App } from "./layout/App";
import { createRoot } from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import { PrimeReactProvider } from "@primereact/core/config";
import { IframePreview } from "./layout/context/IframePreview";

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <PrimeReactProvider license={import.meta.env.VITE_PRIMEUI_LICENSE ?? ""}>
            {new URLSearchParams(window.location.search).get("preview") === "iframe"
                ? <IframePreview/>
                : <App/>}
        </PrimeReactProvider>
    </React.StrictMode>,
);
