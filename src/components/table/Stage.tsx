import { useState } from "react";
import { Box } from "@orangesix/react/box";
import { Reorder } from "./variants/Reorder";
import type { TableVariantProps } from "./types";
import { Expansion } from "./variants/Expansion";
import { Select } from "@orangesix/react/select";
import { CellEditing } from "./variants/CellEditing";
import { Checkbox } from "@orangesix/react/checkbox";
import { RowspanGroups } from "./variants/RowspanGroups";
import { MultipleSort } from "./variants/MultipleSort";
import { LazyPagination } from "./variants/LazyPagination";
import { LazyMultipleSort } from "./variants/LazyMultipleSort";
import { SingleSelection } from "./variants/SingleSelection";
import { ExpandableGroups } from "./variants/ExpandableGroups";
import type { CheckboxValue } from "@orangesix/react/checkbox";
import { CheckboxSelection } from "./variants/CheckboxSelection";

const variants = {
    single: SingleSelection,
    checkbox: CheckboxSelection,
    expand: Expansion,
    edit: CellEditing,
    reorder: Reorder,
    group: ExpandableGroups,
    rowspan: RowspanGroups,
    lazy: LazyPagination,
    multiple: MultipleSort,
    lazyMultiple: LazyMultipleSort,
};
type Scenario = keyof typeof variants;

const scenarios = [
    { id: "single", name: "Seleção simples" },
    { id: "checkbox", name: "Seleção por checkbox" },
    { id: "expand", name: "Expansão de linhas" },
    { id: "edit", name: "Edição de células" },
    { id: "reorder", name: "Reordenar linhas e colunas" },
    { id: "group", name: "Grupos expansíveis" },
    { id: "rowspan", name: "Agrupamento legado rowgroup" },
    { id: "lazy", name: "Paginação e ordenação remotas" },
    { id: "multiple", name: "Ordenação por várias colunas" },
    { id: "lazyMultiple", name: "Ordenação múltipla remota" },
];
const styleOptions = [
    { value: "striped", label: "Listrada" },
    { value: "bordered", label: "Bordas" },
    { value: "frozen", label: "Congelar salário" },
    { value: "empty", label: "Sem dados" },
];
const sizeOptions = [
    { id: "small", name: "Pequeno" },
    { id: "normal", name: "Normal" },
    { id: "large", name: "Grande" },
];

/**
 * Módulo (Sandbox) - Controles e seleção dos exemplos de Table
 */
export function TableStage() {
    const [scenario, setScenario] = useState<Scenario>("single");
    const [options, setOptions] = useState<CheckboxValue[]>([]);
    const [size, setSize] = useState<TableVariantProps["size"]>("small");
    const Variant = variants[scenario];

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
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)_minmax(0,2.5fr)]">
                <Select
                    required
                    icon="gear"
                    label="Opções"
                    mode="Controlled"
                    name="table-scenario"
                    options={scenarios}
                    size="100"
                    value={scenario}
                    onChange={value => {
                        if (value in variants) {
                            setScenario(value as Scenario);
                        }
                    }}/>
                <Select
                    required
                    icon="table"
                    label="Tamanho"
                    mode="Controlled"
                    name="table-size"
                    options={sizeOptions}
                    size="100"
                    value={size}
                    onChange={value => {
                        if (value === "small" || value === "normal" || value === "large") {
                            setSize(value);
                        }
                    }}/>
                <Checkbox
                    icon="palette"
                    label="Aparência"
                    mode="Controlled"
                    name="table-options"
                    options={styleOptions}
                    size="100"
                    value={options}
                    onChange={setOptions}/>
            </div>
            <Variant
                bordered={options.includes("bordered")}
                empty={options.includes("empty")}
                frozen={options.includes("frozen")}
                size={size}
                striped={options.includes("striped")}/>
        </Box>
    );
}

TableStage.displayName = "TableStage";
