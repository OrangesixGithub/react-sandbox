import type { ApiDemoState } from "./state";
import { formModeOptions } from "../form/options";
import { uiFormControls } from "../form/style/ui-controls";
import { CheckboxControl, SelectControl, TextControl } from "../form/Controls";

type ApiControlsProps = {
    apiDemo: ApiDemoState;
    onApiDemoChange: (state: ApiDemoState) => void;
};

/**
 * Módulo (Sandbox) - Controles dos helpers da API
 */
export function ApiControls(props: ApiControlsProps) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className={uiFormControls.fields}>
            <TextControl
                label="Rótulo"
                value={props.apiDemo.label}
                onChange={(label) => props.onApiDemoChange({ ...props.apiDemo, label })}/>
            <SelectControl
                label="Modo"
                options={formModeOptions}
                value={props.apiDemo.mode}
                onChange={(mode) => props.onApiDemoChange({ ...props.apiDemo, mode })}/>
            <CheckboxControl
                checked={props.apiDemo.icon}
                label="Ícone"
                onChange={(icon) => props.onApiDemoChange({ ...props.apiDemo, icon })}/>
            <CheckboxControl
                checked={props.apiDemo.required}
                label="Obrigatório"
                onChange={(required) => props.onApiDemoChange({ ...props.apiDemo, required })}/>
            <CheckboxControl
                checked={props.apiDemo.disabled}
                label="Desabilitado"
                onChange={(disabled) => props.onApiDemoChange({ ...props.apiDemo, disabled })}/>
            <CheckboxControl
                checked={props.apiDemo.showError}
                label="Erro aninhado"
                onChange={(showError) => props.onApiDemoChange({ ...props.apiDemo, showError })}/>
            <p className={uiFormControls.hint}>O feedback de erro aparece no modo HookForm.</p>
        </div>
    );
}
