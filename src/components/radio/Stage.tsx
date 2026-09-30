import { useState } from "react";
import { useForm } from "react-hook-form";
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
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <section className="flex w-full flex-col gap-6 mb-10">
            <Radio
                required
                icon="gear"
                label="Situação controlada"
                name="radio-controlled"
                options={options}
                value={value}
                onChange={setValue}/>
        </section>
    );
}

RadioStage.displayName = "RadioStage";
