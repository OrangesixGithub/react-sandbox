import { useState } from "react";
import { useForm } from "react-hook-form";
import { Textarea } from "@orangesix/react/textarea";

/**
 * Módulo (Sandbox) - Textarea controlado e integração com formulário
 */
export function TextareaStage() {
    const [value, setValue] = useState("");
    const { control, watch } = useForm({ defaultValues: { description: "" } });
    const formValue = watch("description");
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <section className="mb-10 flex w-full flex-col gap-6">
            <div className="flex flex-col gap-2">
                <Textarea
                    required
                    icon="gear"
                    label="Textarea controlado"
                    name="textarea-controlled"
                    placeholder="Digite um texto"
                    value={value}
                    onChange={setValue}/>
                <p className="max-w-full overflow-x-auto whitespace-nowrap text-xs text-neutral-500 scrollbar-themed">Valor do state: <code className="text-primary-400">{JSON.stringify(value)}</code></p>
            </div>
            <div className="flex flex-col gap-2">
                <Textarea
                    required
                    control={control}
                    label="Textarea com HookForm"
                    mode="HookForm"
                    name="description"
                    placeholder="Digite um texto"/>
                <p className="max-w-full overflow-x-auto whitespace-nowrap text-xs text-neutral-500 scrollbar-themed">Valor do HookForm: <code className="text-primary-400">{JSON.stringify(formValue)}</code></p>
            </div>
        </section>
    );
}

TextareaStage.displayName = "TextareaStage";
