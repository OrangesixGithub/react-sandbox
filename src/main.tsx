import React from "react";
import "./layout/styles.css";
import { App } from "./layout/App";
import { createRoot } from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import { PrimeReactProvider } from "primereact/api";
import { IframePreview } from "./layout/context/IframePreview";
import { initializeLightbox } from "@orangesix/react/lightbox";

initializeLightbox();

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <PrimeReactProvider value={{ unstyled: true }}>
            {new URLSearchParams(window.location.search).get("preview") === "iframe"
                ? <IframePreview/>
                : <App/>}
        </PrimeReactProvider>
    </React.StrictMode>,
);
