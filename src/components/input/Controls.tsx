import type { InputDemoState } from "./state";
import { uiFormControls } from "../../core/form/style/ui-controls";
import { CheckboxControl, SelectControl, TextControl } from "../../core/form/Controls";

type InputControlsProps = {
    inputDemo: InputDemoState;
    onInputDemoChange: (state: InputDemoState) => void;
};

const modeOptions = ["Controlled", "HookForm"] as const;
const sizeOptions = [
    { label: "Pequeno", value: "small" },
    { label: "Normal", value: "normal" },
    { label: "Grande", value: "large" },
] as const;

/**
 * Módulo (Sandbox) - Controles do Input
 */
export function InputControls(props: InputControlsProps) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className={uiFormControls.fields}>
            <SelectControl
                label="Modo"
                options={modeOptions.map(value => ({ label: value, value }))}
                value={props.inputDemo.mode}
                onChange={mode => props.onInputDemoChange({ ...props.inputDemo, mode })}/>
            <SelectControl
                label="Tamanho do campo"
                options={sizeOptions}
                value={props.inputDemo.size}
                onChange={size => props.onInputDemoChange({ ...props.inputDemo, size })}/>
            <CheckboxControl
                checked={props.inputDemo.required}
                label="Obrigatório"
                onChange={required => props.onInputDemoChange({ ...props.inputDemo, required })}/>
            <CheckboxControl
                checked={props.inputDemo.disabled}
                label="Desabilitado"
                onChange={disabled => props.onInputDemoChange({ ...props.inputDemo, disabled })}/>
            <CheckboxControl
                checked={props.inputDemo.readonly}
                label="Somente leitura"
                onChange={readonly => props.onInputDemoChange({ ...props.inputDemo, readonly })}/>
            <CheckboxControl
                checked={props.inputDemo.showError}
                label="Com erro"
                onChange={showError => props.onInputDemoChange({ ...props.inputDemo, showError })}/>
            {props.inputDemo.showError && <TextControl
                label="Mensagem de erro"
                value={props.inputDemo.errorText}
                onChange={errorText => props.onInputDemoChange({ ...props.inputDemo, errorText })}/>}
        </div>
    );
}
