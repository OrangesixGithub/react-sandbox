import React from "react";
import "./layout/styles.css";
import { App } from "./layout/App";
import "@orangesix/react/style.css";
import { createRoot } from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
);
