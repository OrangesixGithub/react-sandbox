import { useState } from "react";
import { Button } from "@orangesix/react/button";

/**
 * Módulo (Sandbox) - Demonstração dos estados do Button
 */
export function ButtonStage() {
    const [clicks, setClicks] = useState(0);
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className="flex flex-col w-full gap-5 text-slate-700 dark:text-copy">
            <div className="flex flex-wrap items-center gap-4">
                <Button
                    icon="save"
                    label="Ação"
                    size="small"
                    onClick={() => setClicks(count => count + 1)}/>
                <Button
                    icon="save"
                    label="Ação"
                    onClick={() => setClicks(count => count + 1)}/>
                <Button
                    icon="save"
                    label="Ação"
                    size="large"
                    onClick={() => setClicks(count => count + 1)}/>
            </div>
            <p className="text-xs text-slate-500 dark:text-muted">Cliques no botão principal: {clicks}</p>
        </div>
    );
}
