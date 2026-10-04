import type { TableRow } from "./data";
import { getTableColumns } from "./columns";
import type { TableVariantProps } from "./types";
import type { TableProps } from "@orangesix/react/table";

/** Dados, colunas e aparência comuns aos exemplos. Os recursos ficam explícitos em variants/. */
export function getTableBaseProps(data: TableRow[], props: TableVariantProps): TableProps<TableRow> {
    const visibleData = props.empty ? [] : data;
    return {
        className: "w-full",
        column: getTableColumns(visibleData, props.frozen),
        data: visibleData,
        styleResizable: true,
        styleSize: props.size,
        styleStriped: props.striped,
        styleType: props.bordered ? "bordered" : undefined,
        paginatorAlign: "end"
    };
}
