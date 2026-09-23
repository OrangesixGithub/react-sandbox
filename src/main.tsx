import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./layout/App";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./layout/styles.css";

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
);
