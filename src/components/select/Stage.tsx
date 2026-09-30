import { useState } from "react";
import { useForm } from "react-hook-form";
import { Select } from "@orangesix/react/select";

const options = [
    { id: 1, name: "Ativo" },
    { id: 2, name: "Inativo" },
    { id: 3, name: "Bloqueado", disabled: true },
];

/**
 * Módulo (Sandbox) - Seleção controlada e integração com formulário
 */
export function SelectStage() {
    const [value, setValue] = useState("");
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <section className="flex w-full flex-col mb-10">
            <Select
                init
                required
                icon="list"
                label="Situação controlada"
                name="select-controlled"
                options={options}
                value={value}
                onChange={setValue}/>
        </section>
    );
}

SelectStage.displayName = "SelectStage";
