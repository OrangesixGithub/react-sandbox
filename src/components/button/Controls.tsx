import type { ButtonDemoState } from "./state";
import { uiFormControls } from "../../core/form/style/ui-controls";
import { CheckboxControl, SelectControl, TextControl } from "../../core/form/Controls";

type ButtonControlsProps = {
    buttonDemo: ButtonDemoState;
    onButtonDemoChange: (state: ButtonDemoState) => void;
};

const colorOptions = ["primary", "secondary", "success", "danger", "warning", "info", "help", "dark", "light"] as const;
const sizeOptions = ["small", "normal", "large"] as const;
const positionOptions = ["left", "right", "top", "bottom"] as const;

/**
 * Módulo (Sandbox) - Controles do Button
 */
export function ButtonControls(props: ButtonControlsProps) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className={uiFormControls.fields}>
            <TextControl
                label="Rótulo"
                value={props.buttonDemo.label}
                onChange={label => props.onButtonDemoChange({ ...props.buttonDemo, label })}/>
            <TextControl
                label="Ícone PrimeIcons"
                value={props.buttonDemo.icon}
                onChange={icon => props.onButtonDemoChange({ ...props.buttonDemo, icon })}/>
            <SelectControl
                label="Cor"
                options={colorOptions.map(value => ({ label: value, value }))}
                value={props.buttonDemo.color}
                onChange={color => props.onButtonDemoChange({ ...props.buttonDemo, color })}/>
            <SelectControl
                label="Tamanho"
                options={sizeOptions.map(value => ({ label: value, value }))}
                value={props.buttonDemo.size}
                onChange={size => props.onButtonDemoChange({ ...props.buttonDemo, size })}/>
            <SelectControl
                label="Posição do ícone"
                options={positionOptions.map(value => ({ label: value, value }))}
                value={props.buttonDemo.iconPos}
                onChange={iconPos => props.onButtonDemoChange({ ...props.buttonDemo, iconPos })}/>
            <CheckboxControl
                checked={props.buttonDemo.disabled}
                label="Desabilitado"
                onChange={disabled => props.onButtonDemoChange({ ...props.buttonDemo, disabled })}/>
            <CheckboxControl
                checked={props.buttonDemo.isLoading}
                label="Carregando"
                onChange={isLoading => props.onButtonDemoChange({ ...props.buttonDemo, isLoading })}/>
            <CheckboxControl
                checked={props.buttonDemo.isLink}
                label="Aparência de link"
                onChange={isLink => props.onButtonDemoChange({ ...props.buttonDemo, isLink })}/>
        </div>
    );
}
