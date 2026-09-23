import { useState } from "react";
import { Header } from "./panel/Header";
import { uiApp } from "./styles/ui-app";
import { Sidebar } from "./panel/Sidebar";
import { Content } from "./panel/Content";
import { Controls } from "./panel/Controls";
import type { ComponentName } from "../catalog/components";

/**
 * Módulo (Sandbox) - Catálogo de componentes
 */
export function App() {
    const [selected, setSelected] = useState<ComponentName>("Button");
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className={uiApp.root}>
            <Header/>
            <div className={uiApp.workspace}>
                <Sidebar
                    selected={selected}
                    onSelect={setSelected}/>
                <Content selected={selected}/>
                <Controls/>
            </div>
        </div>
    );
}
