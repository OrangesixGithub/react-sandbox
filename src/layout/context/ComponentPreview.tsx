import type { PanelContentProps } from "../@types/panel";
import { ApiPreview } from "../../components/api/Preview";
import { BoxPreview } from "../../components/box/Preview";
import { ButtonPreview } from "../../components/button/Preview";

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
            {props.selected === "Box"
                && <BoxPreview boxDemo={props.boxDemo}/>}
            {props.selected === "Button"
                && <ButtonPreview buttonDemo={props.buttonDemo}/>}
        </>
    );
}
