import { useState } from "react";
import { Header } from "./panel/Header";
import { uiApp } from "./styles/ui-app";
import { Sidebar } from "./panel/Sidebar";
import { Content } from "./panel/Content";
import { Controls } from "./panel/Controls";
import { initialApiDemo } from "../components/api/state";
import { initialBoxDemo } from "../components/box/state";
import type { ComponentName } from "../components.ts";
import type { ApiDemoState } from "../components/api/state";
import type { BoxDemoState } from "../components/box/state";

/**
 * Módulo (Sandbox) - Catálogo de componentes
 */
export function App() {
    const [selected, setSelected] = useState<ComponentName>("API");
    const [apiDemo, setApiDemo] = useState<ApiDemoState>(initialApiDemo);
    const [boxDemo, setBoxDemo] = useState<BoxDemoState>(initialBoxDemo);
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
                            boxDemo={boxDemo}
                            selected={selected}/>
                        <Controls
                            apiDemo={apiDemo}
                            boxDemo={boxDemo}
                            selected={selected}
                            onApiDemoChange={setApiDemo}
                            onBoxDemoChange={setBoxDemo}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
