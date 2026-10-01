import type { ReactNode } from "react";

type LegendProps = {
    origin: "state" | "HookForm";
    value: unknown;
    children?: ReactNode;
};

/**
 * Módulo (Sandbox) - Legenda com o valor atual do campo
 */
export function Legend(props: LegendProps) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <p className="max-w-full overflow-x-auto whitespace-nowrap text-xs text-neutral-500 scrollbar-themed">
            Valor do {props.origin}: <code className="text-primary-400">{JSON.stringify(props.value)}</code>
            {props.children ? <> · {props.children}</> : null}
        </p>
    );
}
