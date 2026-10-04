import type { TableRow } from "../data";
import { getGroupedData } from "../data";
import { getTableBaseProps } from "../base";
import { Legend } from "../../../core/Legend";
import { Table } from "@orangesix/react/table";
import type { TableVariantProps } from "../types";

/**
 * Módulo (Sandbox) - Table: Agrupamento com o alias legado rowgroup
 */
export function RowspanGroups(props: TableVariantProps) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className="flex flex-col gap-2">
            <Table<TableRow>
                {...getTableBaseProps(getGroupedData(), props)}
                rowGroup="team"
                rowGroupMode="rowgroup"/>
            <Legend
                origin="state"
                value={{ campo: "team", modo: "rowgroup" }}/>
        </div>
    );
}

RowspanGroups.displayName = "RowspanGroups";
