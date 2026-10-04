import { tableData } from "../data";
import type { TableRow } from "../data";
import { useMemo, useState } from "react";
import { getTableBaseProps } from "../base";
import { Legend } from "../../../core/Legend";
import { Table } from "@orangesix/react/table";
import type { TableVariantProps } from "../types";
import type { TableSortMeta } from "@orangesix/react/table";

/**
 * Módulo (Sandbox) - Table: Simulação de paginação e ordenação múltipla remotas
 */
export function LazyMultipleSort(props: TableVariantProps) {
    const [page, setPage] = useState(1);
    const [rows, setRows] = useState(3);
    const [sort, setSort] = useState<TableSortMeta[]>([
        { field: "team", order: 1 },
        { field: "salary", order: -1 },
    ]);
    const sortedData = useMemo(() => [...tableData].sort((left, right) => {
        for (const criterion of sort) {
            const field = criterion.field as keyof TableRow;
            const result = String(left[field]).localeCompare(String(right[field]), "pt-BR", { numeric: true }) * (criterion.order ?? 0);
            if (result !== 0) {
                return result;
            }
        }
        return 0;
    }), [sort]);
    const tableProps = getTableBaseProps(sortedData, props);
    const columns = tableProps.column.map(column => ({ ...column, sort: true }));

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className="flex flex-col gap-2">
            <p className="text-xs text-slate-500">Simulação remota: a ordenação é aplicada antes da paginação. Use Ctrl/⌘ + clique para adicionar colunas.</p>
            <Table<TableRow>
                paginator
                {...tableProps}
                column={columns}
                data={tableProps.data.slice((page - 1) * rows, page * rows)}
                lazy={{ paginationPage: page, paginationTotal: tableProps.data.length, multiSortMeta: sort }}
                paginatorRow={rows}
                rowsPerPageOptions={[3, 6, 12]}
                sortMode="multiple"
                onMultiSort={meta => {
                    setSort(meta);
                    setPage(1);
                }}
                onPaginator={(next, count) => {
                    setPage(next);
                    setRows(count);
                }}/>
            <Legend
                origin="state"
                value={{ page, rows, sort }}/>
        </div>
    );
}

LazyMultipleSort.displayName = "LazyMultipleSort";
