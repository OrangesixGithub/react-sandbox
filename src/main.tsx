import React from "react";
import "./layout/styles.css";
import { App } from "./layout/App";
import "@orangesix/react/style.css";
import { createRoot } from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import { IframePreview } from "./layout/context/IframePreview";

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        {new URLSearchParams(window.location.search).get("preview") === "iframe"
            ? <IframePreview/>
            : <App/>}
    </React.StrictMode>,
);
