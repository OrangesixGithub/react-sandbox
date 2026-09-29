import { useState } from "react";
import { Header } from "./panel/Header";
import { uiApp } from "./styles/ui-app";
import { Sidebar } from "./panel/Sidebar";
import { Content } from "./panel/Content";
import type { ComponentName } from "../components.ts";

/**
 * Módulo (Sandbox) - Catálogo de componentes
 */
export function App() {
    const [selected, setSelected] = useState<ComponentName>("Box");
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className={uiApp.root}>
            <div className={uiApp.workspace}>
                <Sidebar
                    selected={selected}
                    onSelect={setSelected}/>
                <div className={uiApp.mainArea}>
                    <Header/>
                    <div className={uiApp.body}>
                        <Content selected={selected}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
