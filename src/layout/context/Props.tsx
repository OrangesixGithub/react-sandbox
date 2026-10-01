import { Title } from "./Title";
import { uiProps } from "./style/ui-props";
import { uiSections } from "./style/ui-sections";
import { TypeBadges } from "../../core/TypeBadges";
import { boxProps } from "../../components/box/Props";
import { uiApiProps } from "../../core/style/ui-props";
import { radioProps } from "../../components/radio/Props";
import { inputProps } from "../../components/input/Props";
import { editorProps } from "../../components/editor/Props";
import { switchProps } from "../../components/switch/Props";
import { buttonProps } from "../../components/button/Props";
import { selectProps } from "../../components/select/Props";
import type { ContextSelectionProps } from "../@types/context";
import { calendarProps } from "../../components/calendar/Props";
import { checkboxProps } from "../../components/checkbox/Props";
import { textareaProps } from "../../components/textarea/Props";
import { inputfilterProps } from "../../components/inputfilter/Props";
import { multiselectProps } from "../../components/multiselect/Props";
import { autocompleteProps } from "../../components/autocomplete/Props";

const componentProps = {
    Calendar: calendarProps,
    Editor: editorProps,
    Autocomplete: autocompleteProps,
    Box: boxProps,
    Button: buttonProps,
    Input: inputProps,
    Select: selectProps,
    Radio: radioProps,
    Switch: switchProps,
    Checkbox: checkboxProps,
    MultiSelect: multiselectProps,
    Textarea: textareaProps,
    InputFilter: inputfilterProps,
};

/**
 * Módulo (Sandbox) - Referência de propriedades
 */
export function Props(props: ContextSelectionProps) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <section
            aria-labelledby="props-title"
            className={uiSections.section}>
            <Title
                aside="API do componente"
                category="DOCUMENTAÇÃO DO COMPONENT"
                id="props-title"
                index="02"
                title="Props"/>
            <div className={uiProps.panel}>
                <div className={uiProps.header}>
                    <span>PROPRIEDADE</span>
                    <span>TIPO</span>
                    <span>DESCRIÇÃO</span>
                </div>
                <div>
                    {componentProps[props.selected].map(item => (
                        <div
                            className={uiApiProps.row}
                            key={item.name}>
                            <code className={uiApiProps.name}>{item.name}</code>
                            <span className={uiApiProps.type}><TypeBadges value={item.type}/></span>
                            <span className={uiApiProps.description}>{item.description}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
