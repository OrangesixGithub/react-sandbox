import type { PanelContentProps } from "../@types/panel";
import { BoxStage } from "../../components/box/Stage";
import { InputStage } from "../../components/input/Stage";
import { ButtonStage } from "../../components/button/Stage";

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
            {props.selected === "Box"
                && <BoxStage/>}
            {props.selected === "Button"
                && <ButtonStage/>}
            {props.selected === "Input"
                && <InputStage/>}
        </>
    );
}
