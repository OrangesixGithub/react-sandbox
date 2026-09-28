import { useState } from "react";
import { useForm } from "react-hook-form";
import { Box } from "@orangesix/react/box";
import type { InputDemoState } from "./state";
import { Input } from "@orangesix/react/input";

type InputPreviewProps = {
    inputDemo: InputDemoState;
};

const examples = [
    { kind: "text", label: "Texto" },
    { kind: "email", label: "E-mail" },
    { kind: "number", label: "Número" },
    { kind: "password", label: "Senha" },
    { kind: "cpf", label: "CPF" },
    { kind: "cnpj", label: "CNPJ" },
    { kind: "date", label: "Data" },
    { kind: "time", label: "Hora" },
] as const;

type InputExampleKind = typeof examples[number]["kind"];

function variantProps(kind: InputExampleKind) {
    switch (kind) {
        case "text":
            return { type: "text" as const };
        case "email":
            return { type: "email" as const };
        case "number":
            return { type: "number" as const, numberMode: "decimal" as const, numberDecimalSeparator: true as const };
        case "password":
            return { type: "password" as const, passwordFeedback: true, passwordShow: true };
        case "cpf":
            return { type: "text" as const, mask: "cpf" };
        case "cnpj":
            return { type: "text" as const, mask: "cnpj" };
        case "date":
            return { type: "date" as const };
        case "time":
            return { type: "time" as const };
    }
}

/**
 * Módulo (Sandbox) - Galeria dos tipos de Input no modo selecionado
 */
export function InputPreview(props: InputPreviewProps) {
    const [values, setValues] = useState<Record<InputExampleKind, string | number>>({
        text: "", email: "", number: "", password: "", cpf: "", cnpj: "", date: "", time: "",
    });
    const { control } = useForm<Record<InputExampleKind, string | number>>({
        defaultValues: { text: "", email: "", number: "", password: "", cpf: "", cnpj: "", date: "", time: "" },
    });
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
        <div className="w-full max-w-4xl space-y-4 text-neutral-950 dark:text-neutral-200 flex flex-wrap justify-between">
            <div className="w-full">
                <h2 className="text-lg font-semibold">Tipos de Input</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Exibindo todos os tipos em {props.inputDemo.mode}.</p>
            </div>
            {examples.map(example => {
                const variant = variantProps(example.kind);
                const readonly = props.inputDemo.readonly ? { readonly: true as const } : { readonly: false as const };
                return (
                    <Box
                        as="section"
                        className="p-2"
                        direction="column"
                        key={example.kind}
                        size="50">
                        {props.inputDemo.mode === "HookForm"
                            ? <Input
                                {...variant}
                                control={control}
                                disabled={props.inputDemo.disabled}
                                error={error}
                                icon="gear"
                                id={`sandbox-input-${example.kind}-hook-form`}
                                label={example.label}
                                mode="HookForm"
                                name={example.kind}
                                placeholder={`Digite ${example.label.toLowerCase()}`}
                                readonly={props.inputDemo.readonly}
                                required={props.inputDemo.required}
                                sizes={size}/>
                            : <Input
                                {...variant}
                                {...readonly}
                                disabled={props.inputDemo.disabled}
                                error={error}
                                icon="gear"
                                id={`sandbox-input-${example.kind}-controlled`}
                                label={example.label}
                                name={example.kind}
                                placeholder={`Digite ${example.label.toLowerCase()}`}
                                required={props.inputDemo.required}
                                sizes={size}
                                value={values[example.kind]}
                                onChange={value => setValues(current => ({ ...current, [example.kind]: value }))}/>}
                    </Box>
                );
            })}
        </div>
    );
}
