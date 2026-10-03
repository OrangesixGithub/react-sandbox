import { Box } from "@orangesix/react/box";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Legend } from "../../core/Legend";
import { MultiSelect } from "@orangesix/react/multiselect";

const options = [
    { value: "sales", label: "Vendas" },
    { value: "support", label: "Suporte" },
    { value: "finance", label: "Financeiro" },
    { value: "operations", label: "Operações" },
    { value: "blocked", label: "Bloqueado", disabled: true },
];

/**
 * Módulo (Sandbox) - Seleção múltipla controlada e integração com formulário
 */
export function MultiSelectStage() {
    const [value, setValue] = useState<string[]>([]);
    const { control, watch } = useForm({ defaultValues: { departments: [] as string[] } });
    const departments = watch("departments");
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
                <MultiSelect
                    required
                    filter={{ placeholder: "Buscar departamento" }}
                    label="MultiSelect controlado"
                    name="multiselect-controlled"
                    options={options}
                    placeholder="Selecione os departamentos"
                    value={value}
                    onChange={setValue}/>
                <Legend
                    origin="state"
                    value={value}/>
            </div>
            <div className="flex flex-col gap-2">
                <MultiSelect
                    required
                    control={control}
                    filter={{ placeholder: "Buscar departamento" }}
                    label="MultiSelect com HookForm"
                    mode="HookForm"
                    name="departments"
                    options={options}
                    placeholder="Selecione os departamentos"/>
                <Legend
                    origin="HookForm"
                    value={departments}/>
            </div>
        </Box>
    );
}

MultiSelectStage.displayName = "MultiSelectStage";
