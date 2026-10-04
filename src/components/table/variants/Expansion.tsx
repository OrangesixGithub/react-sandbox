import { useState } from "react";
import { tableData } from "../data";
import type { TableRow } from "../data";
import { getTableBaseProps } from "../base";
import { Legend } from "../../../core/Legend";
import { Table } from "@orangesix/react/table";
import type { TableVariantProps } from "../types";
import type { TableExpandProps } from "@orangesix/react/table";

/**
 * Módulo (Sandbox) - Table: Expansão controlada de linhas
 */
export function Expansion(props: TableVariantProps) {
    const [expanded, setExpanded] = useState<TableExpandProps<TableRow>["rowExpandable"]>({});
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
                rowExpandable={expanded}
                rowExpandableAttr="details"
                rowExpansionTemplate={row => <div className="py-2">{row.details}</div>}
                onRowExpandable={event => setExpanded(event.data)}/>
            <Legend
                origin="state"
                value={expanded}/>
        </div>
    );
}

Expansion.displayName = "Expansion";
