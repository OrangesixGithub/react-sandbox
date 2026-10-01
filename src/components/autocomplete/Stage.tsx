import { useState } from "react";
import { useForm } from "react-hook-form";
import { Legend } from "../../core/Legend";
import { Autocomplete } from "@orangesix/react/autocomplete";
import type { AutocompleteDataProps } from "@orangesix/react/autocomplete";

const options: AutocompleteDataProps[] = [
    { id: 1, name: "Vendas" },
    { id: 2, name: "Suporte" },
    { id: 3, name: "Financeiro" },
    { id: 4, name: "Operações" },
];

/**
 * Módulo (Sandbox) - Autocomplete controlado e integração com formulário
 */
export function AutocompleteStage() {
    const [data, setData] = useState(options);

    const [value, setValue] = useState<AutocompleteDataProps | string | null>(null);
    const { control, watch } = useForm({ defaultValues: {
        department: null as AutocompleteDataProps | string | null
    } });
    const departament = watch("department");
    const search = (query: string) =>
        options.filter(item => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <section className="mb-10 flex w-full flex-col gap-6">
            <div className="flex flex-col gap-2">
                <Autocomplete
                    required
                    data={data}
                    icon="search"
                    label="Autocomplete controlado"
                    name="autocomplete-controlled"
                    placeholder="Busque um departamento"
                    value={value}
                    onChange={setValue}
                    onSearch={query => setData(search(query))}/>
                <Legend
                    origin="state"
                    value={value}/>
            </div>
            <div className="flex flex-col gap-2">
                <Autocomplete
                    required
                    control={control}
                    data={data}
                    label="Autocomplete com HookForm"
                    mode="HookForm"
                    name="department"
                    placeholder="Busque um departamento"
                    onSearch={query => setData(search(query))}/>
                <Legend
                    origin="HookForm"
                    value={departament}/>
            </div>
        </section>
    );
}

AutocompleteStage.displayName = "AutocompleteStage";
