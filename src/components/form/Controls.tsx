import { uiFormControls } from "./style/ui-controls";

type TextControlProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
};

type SelectControlProps<T extends string> = {
    label: string;
    options: readonly { label: string; value: T }[];
    value: T;
    onChange: (value: T) => void;
};

type CheckboxControlProps = {
    checked: boolean;
    label: string;
    onChange: (checked: boolean) => void;
};

/**
 * Módulo (Sandbox) - Controle de texto para formulários
 */
export function TextControl(props: TextControlProps) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <label className={uiFormControls.fieldLabel}>
            {props.label}
            <input
                className={uiFormControls.input}
                value={props.value}
                onChange={(event) => props.onChange(event.target.value)}/>
        </label>
    );
}

/**
 * Módulo (Sandbox) - Controle de seleção para formulários
 */
export function SelectControl<T extends string>(props: SelectControlProps<T>) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <label className={uiFormControls.fieldLabel}>
            {props.label}
            <select
                className={uiFormControls.input}
                value={props.value}
                onChange={(event) => props.onChange(event.target.value as T)}>
                {props.options.map((option) => (
                    <option key={option.value}
                        value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
    );
}

/**
 * Módulo (Sandbox) - Controle de alternância para formulários
 */
export function CheckboxControl(props: CheckboxControlProps) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <label className={uiFormControls.checkboxLabel}>
            <input
                checked={props.checked}
                type="checkbox"
                onChange={(event) => props.onChange(event.target.checked)}/>
            {props.label}
        </label>
    );
}
