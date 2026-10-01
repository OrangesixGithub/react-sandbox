import { useState } from "react";
import { useForm } from "react-hook-form";
import { Legend } from "../../core/Legend";
import { Radio } from "@orangesix/react/radio";

const options = [
    { value: "active", label: "Ativo" },
    { value: "inactive", label: "Inativo" },
    { value: "blocked", label: "Bloqueado", disabled: true },
];

/**
 * Módulo (Sandbox) - Radio controlado e integração com formulário
 */
export function RadioStage() {
    const [value, setValue] = useState("active");
    const { control, watch } = useForm({ defaultValues: { status: "inactive" } });
    const formValue = watch("status");
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <section className="mb-10 flex w-full flex-col gap-6">
            <div className="flex flex-col gap-2">
                <Radio
                    required
                    icon="gear"
                    label="Radio controlado"
                    name="radio-controlled"
                    options={options}
                    value={value}
                    onChange={setValue}/>
                <Legend
                    origin="state"
                    value={value}/>
            </div>
            <div className="flex flex-col gap-2">
                <Radio
                    required
                    control={control}
                    label="Radio com HookForm"
                    mode="HookForm"
                    name="status"
                    options={options}/>
                <Legend
                    origin="HookForm"
                    value={formValue}/>
            </div>
        </section>
    );
}

RadioStage.displayName = "RadioStage";
