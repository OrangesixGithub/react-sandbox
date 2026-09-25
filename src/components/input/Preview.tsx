import { useState } from "react";
import { useForm } from "react-hook-form";
import type { InputDemoState } from "./state";
import { Input } from "@orangesix/react/input";

type InputPreviewProps = {
    inputDemo: InputDemoState;
};

/**
 * Módulo (Sandbox) - Campo interativo no tema da prévia
 */
export function InputPreview(props: InputPreviewProps) {
    const [value, setValue] = useState<string | number>("");
    const { control, watch } = useForm<Record<string, string | number>>({ defaultValues: { input: "" } });
    const inputType = props.inputDemo.type === "cpf" ? "text" : props.inputDemo.type;
    const mask = props.inputDemo.type === "cpf" ? "cpf" : undefined;
    const size = props.inputDemo.size === "normal" ? undefined : props.inputDemo.size;
    const error = props.inputDemo.showError
        ? props.inputDemo.errorText.trim() || "Campo inválido"
        : undefined;
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-5 text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200">
            <div className="mb-4 flex items-center justify-between gap-3">
                <strong className="text-sm">Entrada de dados</strong>
                <span className="text-xs text-slate-500 dark:text-slate-400">{props.inputDemo.mode}</span>
            </div>
            {props.inputDemo.mode === "HookForm"
                ? <Input
                    control={control}
                    disabled={props.inputDemo.disabled}
                    error={error}
                    icon="gear"
                    id="sandbox-input-hook-form"
                    label={props.inputDemo.label}
                    mask={mask}
                    mode="HookForm"
                    name="input"
                    numberMode="currency"
                    passwordFeedback={inputType === "password"}
                    passwordShow={inputType === "password"}
                    placeholder="Digite o valor"
                    readonly={props.inputDemo.readonly}
                    required={props.inputDemo.required}
                    sizes={size}
                    type={inputType}/>
                : <Input
                    disabled={props.inputDemo.disabled}
                    error={error}
                    icon="gear"
                    id="sandbox-input-controlled"
                    label={props.inputDemo.label}
                    mask={mask}
                    numberMode="currency"
                    passwordFeedback={inputType === "password"}
                    passwordShow={inputType === "password"}
                    placeholder="Digite o valor"
                    readonly={props.inputDemo.readonly}
                    required={props.inputDemo.required}
                    sizes={size}
                    type={inputType}
                    value={value}
                    onChange={setValue}/>}
        </div>
    );
}
