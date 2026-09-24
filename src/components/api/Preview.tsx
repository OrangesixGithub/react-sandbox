import { useRef, useState } from "react";
import type { ApiDemoState } from "./state";
import { uiApiPreview } from "./style/ui-preview";
import { InputFeedback, InputLabel, InputProps } from "@orangesix/react/api";

type ApiPreviewProps = {
    apiDemo: ApiDemoState;
};

/**
 * Módulo (Sandbox) - Demonstração dos helpers da API
 */
export function ApiPreview(props: ApiPreviewProps) {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const fieldName = "usuario.email";
    const fieldProps = InputProps({
        id: "api-email",
        name: fieldName,
        placeholder: "nome@exemplo.com",
        required: props.apiDemo.required,
        disabled: props.apiDemo.disabled,
        className: uiApiPreview.input,
    });
    const errors = props.apiDemo.showError
        ? { usuario: { email: { type: "required", message: "Informe um e-mail válido." } } }
        : undefined;

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className={uiApiPreview.card}>
            <div className={uiApiPreview.head}>
                <strong className={uiApiPreview.title}>Helpers de campo</strong>
                <p className={uiApiPreview.description}>O campo abaixo combina InputLabel, InputProps e InputFeedback da biblioteca.</p>
            </div>
            <div className={uiApiPreview.field}>
                <InputLabel
                    icon={props.apiDemo.icon ? "envelope" : undefined}
                    iconPrefix="bi bi-"
                    id="api-email"
                    label={props.apiDemo.label}
                    required={props.apiDemo.required}/>
                <input
                    {...fieldProps}
                    ref={inputRef}
                    type="email"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}/>
                <InputFeedback
                    errors={errors}
                    id="api-email"
                    mode={props.apiDemo.mode}
                    name={fieldName}/>
            </div>
        </div>
    );
}
