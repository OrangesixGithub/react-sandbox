import { useState } from "react";
import { Button } from "@orangesix/react/button";

/**
 * Hook (Sandbox) - Registro das últimas ações dos exemplos de Utils
 */
export function useLog(limit: number = 14) {
    const [lines, setLines] = useState<string[]>([]);

    function add(text: string) {
        setLines(current => [`${new Date().toLocaleTimeString()} · ${text}`, ...current].slice(0, limit));
    }

    function clear() {
        setLines([]);
    }

    return { lines, add, clear };
}

/**
 * Módulo (Sandbox) - Utils: lista do registro com o botão de limpar
 */
export function Log(props: { lines: string[]; onClear: () => void }) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-neutral-500">Registro</span>
                <Button
                    color="secondary"
                    disabled={props.lines.length === 0}
                    icon="trash"
                    label="Limpar log"
                    size="small"
                    onClick={props.onClear}/>
            </div>
            <ul className="flex flex-col gap-1 text-xs text-neutral-500">
                {props.lines.length === 0 && <li>Nenhuma ação ainda.</li>}
                {props.lines.map((line, index) => <li key={index}><code>{line}</code></li>)}
            </ul>
        </div>
    );
}

Log.displayName = "Log";
