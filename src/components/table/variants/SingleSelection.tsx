import { useState } from "react";
import { tableData } from "../data";
import type { TableRow } from "../data";
import { getTableBaseProps } from "../base";
import { Legend } from "../../../core/Legend";
import { Table } from "@orangesix/react/table";
import type { TableVariantProps } from "../types";

/**
 * Módulo (Sandbox) - Table: Seleção simples e duplo clique
 */
export function SingleSelection(props: TableVariantProps) {
    const [selection, setSelection] = useState<TableRow | null>(null);
    const [lastEvent, setLastEvent] = useState("");
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className="flex flex-col gap-2">
            <Table<TableRow>
                {...getTableBaseProps(tableData, props)}
                paginator
                selection={selection}
                selectionMode="single"
                onDoubleClick={event => setLastEvent(`Duplo clique no registro ${event.data.id}`)}
                onRowSelect={event => setLastEvent(`Selecionou ${event.data.name} (${event.type})`)}
                onRowUnselect={event => setLastEvent(`Desmarcou ${event.data.name} (${event.type})`)}
                onSelection={setSelection}/>
            <Legend
                origin="state"
                value={{ selection, lastEvent }}/>
        </div>
    );
}

SingleSelection.displayName = "SingleSelection";
