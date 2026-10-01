import { useState } from "react";
import { useForm } from "react-hook-form";
import { Legend } from "../../core/Legend";
import { Input } from "@orangesix/react/input";

/**
 * Módulo (Sandbox) - Input controlado e integração com formulário
 */
export function InputStage() {
    const [value, setValue] = useState("");
    const { control, watch } = useForm({ defaultValues: { name: "" } });
    const formValue = watch("name");
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <section className="mb-10 flex w-full flex-col gap-6">
            <div className="flex flex-col gap-2">
                <Input
                    required
                    icon="gear"
                    label="Input controlado"
                    name="input-controlled"
                    placeholder="Digite um texto"
                    value={value}
                    onChange={setValue}/>
                <Legend
                    origin="state"
                    value={value}/>
            </div>
            <div className="flex flex-col gap-2">
                <Input
                    required
                    control={control}
                    label="Input com HookForm"
                    mode="HookForm"
                    name="name"
                    placeholder="Digite um texto"/>
                <Legend
                    origin="HookForm"
                    value={formValue}/>
            </div>
        </section>
    );
}

InputStage.displayName = "InputStage";
