import { useState } from "react";
import type { TableRow } from "../data";
import { createTableData } from "../data";
import { getTableBaseProps } from "../base";
import { Legend } from "../../../core/Legend";
import { Input } from "@orangesix/react/input";
import { Table } from "@orangesix/react/table";
import type { TableVariantProps } from "../types";

/**
 * Módulo (Sandbox) - Table: Edição de nomes com Input do pacote
 */
export function CellEditing(props: TableVariantProps) {
    const [data, setData] = useState(createTableData);
    const tableProps = getTableBaseProps(data, props);

    const column = tableProps.column.map(column => {
        if (column.id !== "name") {
            return column;
        }
        return {
            ...column,
            editor: options => (
                <Input
                    label="Nome"
                    name="table-edit-name"
                    showLabel={false}
                    sizes="small"
                    value={options.value ?? ""}
                    onChange={value => options.editorCallback?.(value)}/>
            ),
            onEditorComplete: event => {
                setData(current => current.map(row => row.id === event.rowData.id ? { ...row, name: event.newValue } : row));
            },
        } satisfies typeof column;
    });

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className="flex flex-col gap-2">
            <Table<TableRow>
                edit
                paginator
                {...tableProps}
                column={column}/>
            <Legend
                origin="state"
                value={data.map(row => ({ id: row.id, name: row.name }))}/>
        </div>
    );
}

CellEditing.displayName = "CellEditing";
