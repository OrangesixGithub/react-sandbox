import { useState } from "react";
import { Header } from "./panel/Header";
import { uiApp } from "./styles/ui-app";
import { Sidebar } from "./panel/Sidebar";
import { Content } from "./panel/Content";
import { Controls } from "./panel/Controls";
import { initialApiDemo } from "../components/api/state";
import type { ComponentName } from "../catalog/components";
import type { ApiDemoState } from "../components/api/state";

/**
 * Módulo (Sandbox) - Catálogo de componentes
 */
export function App() {
    const [selected, setSelected] = useState<ComponentName>("API");
    const [apiDemo, setApiDemo] = useState<ApiDemoState>(initialApiDemo);
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
                        <Content
                            apiDemo={apiDemo}
                            selected={selected}/>
                        <Controls
                            apiDemo={apiDemo}
                            selected={selected}
                            onApiDemoChange={setApiDemo}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
