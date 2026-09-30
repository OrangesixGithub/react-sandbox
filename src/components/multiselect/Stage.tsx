import { useState } from "react";
import { useForm } from "react-hook-form";
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
        <section className="mb-10 flex w-full flex-col gap-6">
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
                <p className="text-xs text-neutral-500">Valor do state: <code className="text-primary-400">{JSON.stringify(value)}</code></p>
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
                <p className="text-xs text-neutral-500">Valor do HookForm: <code className="text-primary-400">{JSON.stringify(departments)}</code></p>
            </div>
        </section>
    );
}

MultiSelectStage.displayName = "MultiSelectStage";
