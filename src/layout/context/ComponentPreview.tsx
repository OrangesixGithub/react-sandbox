import { BoxStage } from "../../components/box/Stage";
import { RadioStage } from "../../components/radio/Stage";
import type { PanelContentProps } from "../@types/panel";
import { InputStage } from "../../components/input/Stage";
import { SwitchStage } from "../../components/switch/Stage";
import { ButtonStage } from "../../components/button/Stage";
import { SelectStage } from "../../components/select/Stage";

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
            {props.selected === "Switch" && <SwitchStage/>}
            {props.selected === "Radio" && <RadioStage/>}
            {props.selected === "Select"
                && <SelectStage/>}
        </>
    );
}
