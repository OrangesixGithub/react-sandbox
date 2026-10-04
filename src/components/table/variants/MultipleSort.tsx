import { useState } from "react";
import { tableData } from "../data";
import type { TableRow } from "../data";
import { getTableBaseProps } from "../base";
import { Legend } from "../../../core/Legend";
import { Table } from "@orangesix/react/table";
import type { TableVariantProps } from "../types";
import type { TableSortMeta } from "@orangesix/react/table";

/**
 * Módulo (Sandbox) - Table: Ordenação local por várias colunas
 */
export function MultipleSort(props: TableVariantProps) {
    const [sort, setSort] = useState<TableSortMeta[]>([
        { field: "team", order: 1 },
        { field: "salary", order: -1 },
    ]);
    const tableProps = getTableBaseProps(tableData, props);
    const columns = tableProps.column.map(column => ({ ...column, sort: true }));

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className="flex flex-col gap-2">
            <p className="text-xs text-slate-500">Use Ctrl/⌘ + clique para adicionar colunas. Os números indicam a prioridade.</p>
            <Table<TableRow>
                {...tableProps}
                column={columns}
                multiSortMeta={sort}
                sortMode="multiple"
                onMultiSort={setSort}/>
            <Legend
                origin="state"
                value={sort}/>
        </div>
    );
}

MultipleSort.displayName = "MultipleSort";
