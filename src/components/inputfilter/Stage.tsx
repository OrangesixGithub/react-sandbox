import { Box } from "@orangesix/react/box";
import { useState } from "react";
import { Legend } from "../../core/Legend";
import { InputFilter, filterLegendAutocomplete, filterLegendData, filterLegendText } from "@orangesix/react/inputfilter";

const departments = [
    { id: 1, label: "Vendas" },
    { id: 2, label: "Suporte" },
    { id: 3, label: "Financeiro" },
    { id: 4, label: "Operações" },
];

/**
 * Módulo (Sandbox) - InputFilter, um por tipo de filtro
 */
export function InputFilterStage() {
    const [text, setText] = useState<string | null>(null);
    const [number, setNumber] = useState<string | null>(null);
    const [date, setDate] = useState<string | null>(null);
    const [autocomplete, setAutocomplete] = useState<string | null>(null);
    const [data, setData] = useState(departments);
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
                <InputFilter
                    icon="fonts"
                    label="Texto"
                    name="inputfilter-text"
                    placeholder="Digite um texto"
                    type="text"
                    value={text ?? undefined}
                    onChange={setText}/>
                <Legend
                    origin="state"
                    value={text}>
                    {filterLegendText(text ?? undefined)}
                </Legend>
            </div>
            <div className="flex flex-col gap-2">
                <InputFilter
                    icon="123"
                    label="Número"
                    name="inputfilter-number"
                    options={["=", "!=", "<", ">", "<=", ">="]}
                    placeholder="Digite um número"
                    type="number"
                    value={number ?? undefined}
                    onChange={setNumber}/>
                <Legend
                    origin="state"
                    value={number}/>
            </div>
            <div className="flex flex-col gap-2">
                <InputFilter
                    icon="calendar"
                    label="Data"
                    name="inputfilter-date"
                    options={["=", "!=", "<", ">", "<=", ">=", "{}"]}
                    type="date"
                    value={date ?? undefined}
                    onChange={setDate}/>
                <Legend
                    origin="state"
                    value={date}>
                    {filterLegendData(date ?? undefined)}
                </Legend>
            </div>
            <div className="flex flex-col gap-2">
                <InputFilter
                    autocompleteSelectLimit={3}
                    data={data}
                    icon="search"
                    label="Autocomplete"
                    name="inputfilter-autocomplete"
                    placeholder="Busque um departamento"
                    type="autocomplete"
                    value={autocomplete ?? undefined}
                    onChange={setAutocomplete}
                    onSearch={query => setData(departments.filter(item => item.label.toLowerCase().includes(query.toLowerCase())))}/>
                <Legend
                    origin="state"
                    value={autocomplete}>
                    {filterLegendAutocomplete(autocomplete ?? undefined, departments)}
                </Legend>
            </div>
        </Box>
    );
}

InputFilterStage.displayName = "InputFilterStage";
