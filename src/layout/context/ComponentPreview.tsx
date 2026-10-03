import { BoxStage } from "../../components/box/Stage";
import type { PanelContentProps } from "../@types/panel";
import { ModalStage } from "../../components/modal/Stage";
import { RadioStage } from "../../components/radio/Stage";
import { InputStage } from "../../components/input/Stage";
import { EditorStage } from "../../components/editor/Stage";
import { SwitchStage } from "../../components/switch/Stage";
import { ButtonStage } from "../../components/button/Stage";
import { SelectStage } from "../../components/select/Stage";
import { MessageStage } from "../../components/message/Stage";
import { LoadingStage } from "../../components/loading/Stage";
import { TabviewStage } from "../../components/tabview/Stage";
import { TextareaStage } from "../../components/textarea/Stage";
import { CheckboxStage } from "../../components/checkbox/Stage";
import { CalendarStage } from "../../components/calendar/Stage";
import { LightboxStage } from "../../components/lightbox/Stage";
import { PickListStage } from "../../components/picklist/Stage";
import { AccordionStage } from "../../components/accordion/Stage";
import { InputFilterStage } from "../../components/inputfilter/Stage";
import { MultiSelectStage } from "../../components/multiselect/Stage";
import { AutocompleteStage } from "../../components/autocomplete/Stage";

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
            {props.selected === "Lightbox" && <LightboxStage/>}
            {props.selected === "Loading" && <LoadingStage/>}
            {props.selected === "Accordion" && <AccordionStage/>}
            {props.selected === "Message" && <MessageStage/>}
            {props.selected === "Modal" && <ModalStage/>}
            {props.selected === "PickList" && <PickListStage/>}
            {props.selected === "TabView" && <TabviewStage/>}
            {props.selected === "Calendar" && <CalendarStage/>}
            {props.selected === "Editor" && <EditorStage/>}
            {props.selected === "Autocomplete" && <AutocompleteStage/>}
            {props.selected === "Box" && <BoxStage/>}
            {props.selected === "Button" && <ButtonStage/>}
            {props.selected === "Input" && <InputStage/>}
            {props.selected === "Checkbox" && <CheckboxStage/>}
            {props.selected === "Switch" && <SwitchStage/>}
            {props.selected === "MultiSelect" && <MultiSelectStage/>}
            {props.selected === "Textarea" && <TextareaStage/>}
            {props.selected === "InputFilter" && <InputFilterStage/>}
            {props.selected === "Radio" && <RadioStage/>}
            {props.selected === "Select" && <SelectStage/>}
        </>
    );
}
