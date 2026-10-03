import { Box } from "@orangesix/react/box";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Legend } from "../../core/Legend";
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
    const { control, watch } = useForm({ defaultValues: { status: "" } });
    const status = watch("status");
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <Box
            as="section"
            className="mb-10 gap-6"
            direction="column">
            <div className="flex flex-col gap-2">
                <Select
                    init
                    required
                    icon="list"
                    label="Select controlado"
                    name="select-controlled"
                    options={options}
                    value={value}
                    onChange={setValue}/>
                <Legend
                    origin="state"
                    value={value}/>
            </div>
            <div className="flex flex-col gap-2">
                <Select
                    init
                    required
                    control={control}
                    label="Select com HookForm"
                    mode="HookForm"
                    name="status"
                    options={options}/>
                <Legend
                    origin="HookForm"
                    value={status}/>
            </div>
        </Box>
    );
}

SelectStage.displayName = "SelectStage";
