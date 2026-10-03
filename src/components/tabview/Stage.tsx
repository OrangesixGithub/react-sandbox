import { Box } from "@orangesix/react/box";
import { useState } from "react";
import { Legend } from "../../core/Legend";
import { Tabview } from "@orangesix/react/tabview";

const tabs = [
    { tab: "Início", icon: "house", content: "Conteúdo da aba Início." },
    { tab: "Perfil", icon: "person", iconPosition: "right" as const, content: "Conteúdo da aba Perfil." },
    { tab: "Desabilitada", icon: "lock", disabled: true, content: "Não pode ser aberta." },
    { tab: "Fechável", icon: "x-square", closed: true, content: "Esta aba pode ser fechada." },
];

/**
 * Módulo (Sandbox) - Tabview controlado e sem controle externo
 */
export function TabviewStage() {
    const [index, setIndex] = useState(0);
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <Box
            as="section"
            className="mb-10 gap-6"
            direction="column">
            <div className="flex flex-col gap-2">
                <Tabview
                    tabIndex={index}
                    tabs={tabs}
                    onChange={event => setIndex(event.index)}/>
                <Legend
                    origin="state"
                    value={index}/>
            </div>
            <div className="flex flex-col gap-2">
                <Tabview
                    tabActiveRender={false}
                    tabs={tabs.slice(0, 2)}/>
            </div>
        </Box>
    );
}

TabviewStage.displayName = "TabviewStage";
