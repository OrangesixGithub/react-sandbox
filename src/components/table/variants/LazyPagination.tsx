import { tableData } from "../data";
import type { TableRow } from "../data";
import { useMemo, useState } from "react";
import { getTableBaseProps } from "../base";
import { Legend } from "../../../core/Legend";
import { Table } from "@orangesix/react/table";
import type { TableVariantProps } from "../types";
import type { SortOrder } from "primereact/datatable";
import type { TablePaginationProps } from "@orangesix/react/table";

type PageSize = NonNullable<TablePaginationProps["paginatorRow"]>;

/**
 * Módulo (Sandbox) - Table: Simulação de paginação e ordenação remotas
 */
export function LazyPagination(props: TableVariantProps) {
    const [page, setPage] = useState(1);
    const [rows, setRows] = useState<PageSize>(3);
    const [sort, setSort] = useState<{ field: string; order: SortOrder }>({ field: "name", order: 1 });
    const sortedData = useMemo(() => [...tableData].sort((left, right) => {
        const field = sort.field as keyof TableRow;
        return String(left[field]).localeCompare(String(right[field]), "pt-BR", { numeric: true }) * (sort.order ?? 1);
    }), [sort]);
    const tableProps = getTableBaseProps(sortedData, props);
    const pageData = tableProps.data.slice((page - 1) * rows, page * rows);

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className="flex flex-col gap-2">
            <Table<TableRow>
                paginator
                {...tableProps}
                lazy={{
                    paginationPage: page,
                    paginationTotal: tableProps.data.length,
                    sortField: sort.field,
                    sortOrder: sort.order,
                }}
                data={pageData}
                paginatorRow={rows}
                rowsPerPageOptions={[3, 6, 12]}
                onPaginator={(next, count) => {
                    setPage(next);
                    setRows(count);
                }}
                onSort={(field, order) => {
                    setSort({ field, order });
                    setPage(1);
                }}/>
            <Legend
                origin="state"
                value={{ page, rows, sort }}/>
        </div>
    );
}

LazyPagination.displayName = "LazyPagination";
