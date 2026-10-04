import { useState } from "react";
import type { TableRow } from "../data";
import { createTableData } from "../data";
import { getTableBaseProps } from "../base";
import { Legend } from "../../../core/Legend";
import { Table } from "@orangesix/react/table";
import type { TableVariantProps } from "../types";

/**
 * Módulo (Sandbox) - Table: Reordenação de linhas e colunas
 */
export function Reorder(props: TableVariantProps) {
    const [data, setData] = useState(createTableData);
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className="flex flex-col gap-2">
            <Table<TableRow>
                {...getTableBaseProps(data, props)}
                reorder="all"
                onReorder={value => setData(value as TableRow[])}/>
            <Legend
                origin="state"
                value={data.map(row => ({ id: row.id, order: row.order }))}/>
        </div>
    );
}

Reorder.displayName = "Reorder";
