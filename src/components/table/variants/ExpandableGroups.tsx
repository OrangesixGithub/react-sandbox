import { useState } from "react";
import type { TableRow } from "../data";
import { getGroupedData } from "../data";
import { getTableBaseProps } from "../base";
import { Legend } from "../../../core/Legend";
import { Table } from "@orangesix/react/table";
import type { TableVariantProps } from "../types";
import type { TableExpandProps } from "@orangesix/react/table";

/**
 * Módulo (Sandbox) - Table: Grupos com expansão controlada
 */
export function ExpandableGroups(props: TableVariantProps) {
    const [expanded, setExpanded] = useState<TableExpandProps<TableRow>["rowExpandable"]>([]);
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className="flex flex-col gap-2">
            <Table<TableRow>
                {...getTableBaseProps(getGroupedData(), props)}
                rowExpandable={expanded}
                rowGroup="team"
                rowGroupHeaderTemplate={(row: TableRow) => <span>{row.team}</span>}
                rowGroupMode="subheader"
                onRowExpandable={event => setExpanded(event.data)}/>
            <Legend
                origin="state"
                value={expanded}/>
        </div>
    );
}

ExpandableGroups.displayName = "ExpandableGroups";
