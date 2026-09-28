import React from "react";
import "./layout/styles.css";
import { App } from "./layout/App";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import "bootstrap-icons/font/bootstrap-icons.css";
import { IframePreview } from "./layout/context/IframePreview";

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <PrimeReactProvider value={{ unstyled: true }}>
            {new URLSearchParams(window.location.search).get("preview") === "iframe"
                ? <IframePreview/>
                : <App/>}
        </PrimeReactProvider>
    </React.StrictMode>,
);
