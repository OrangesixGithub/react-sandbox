import type { PanelContentProps } from "../@types/panel";
import { ApiPreview } from "../../components/api/Preview";

/**
 * Módulo (Sandbox) - Conteúdo compartilhado das prévias
 */
export function ComponentPreview(props: PanelContentProps) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <>
            {props.selected === "API"
                && <ApiPreview apiDemo={props.apiDemo}/>}
        </>
    );
}
