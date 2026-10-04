import { useState } from "react";
import { tableData } from "../data";
import type { TableRow } from "../data";
import { getTableBaseProps } from "../base";
import { Legend } from "../../../core/Legend";
import { Table } from "@orangesix/react/table";
import type { TableVariantProps } from "../types";

/**
 * Módulo (Sandbox) - Table: Seleção múltipla por checkbox
 */
export function CheckboxSelection(props: TableVariantProps) {
    const [selection, setSelection] = useState<TableRow[]>([]);
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
                selectionMode="checkbox"
                onSelection={setSelection}/>
            <Legend
                origin="state"
                value={selection}/>
        </div>
    );
}

CheckboxSelection.displayName = "CheckboxSelection";
