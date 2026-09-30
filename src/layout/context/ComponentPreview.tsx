import { BoxStage } from "../../components/box/Stage";
import type { PanelContentProps } from "../@types/panel";
import { InputStage } from "../../components/input/Stage";
import { SelectStage } from "../../components/select/Stage";
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
            {props.selected === "Select"
                && <SelectStage/>}
        </>
    );
}
