import { useState } from "react";
import { Header } from "./panel/Header";
import { uiApp } from "./styles/ui-app";
import { Sidebar } from "./panel/Sidebar";
import { Content } from "./panel/Content";
import { Controls } from "./panel/Controls";
import type { ComponentName } from "../components.ts";
import { initialApiDemo } from "../components/api/state";
import { initialBoxDemo } from "../components/box/state";
import type { ApiDemoState } from "../components/api/state";
import type { BoxDemoState } from "../components/box/state";
import { initialButtonDemo } from "../components/button/state";
import type { ButtonDemoState } from "../components/button/state";
import { initialInputDemo } from "../components/input/state";
import type { InputDemoState } from "../components/input/state";

/**
 * Módulo (Sandbox) - Catálogo de componentes
 */
export function App() {
    const [selected, setSelected] = useState<ComponentName>("API");
    const [apiDemo, setApiDemo] = useState<ApiDemoState>(initialApiDemo);
    const [boxDemo, setBoxDemo] = useState<BoxDemoState>(initialBoxDemo);
    const [buttonDemo, setButtonDemo] = useState<ButtonDemoState>(initialButtonDemo);
    const [inputDemo, setInputDemo] = useState<InputDemoState>(initialInputDemo);
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
                            buttonDemo={buttonDemo}
                            inputDemo={inputDemo}
                            selected={selected}/>
                        <Controls
                            apiDemo={apiDemo}
                            boxDemo={boxDemo}
                            buttonDemo={buttonDemo}
                            inputDemo={inputDemo}
                            selected={selected}
                            onApiDemoChange={setApiDemo}
                            onBoxDemoChange={setBoxDemo}
                            onButtonDemoChange={setButtonDemo}
                            onInputDemoChange={setInputDemo}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
