import type { TableRow } from "./data";
import type { TableColumnProps } from "@orangesix/react/table";

const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const statusStyles = {
    active: { label: "Active", className: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400" },
    leave: { label: "On leave", className: "bg-slate-500/10 text-slate-500 dark:text-slate-400" },
    inactive: { label: "Inactive", className: "bg-rose-500/10 text-rose-500 dark:text-rose-400" },
};

/** Colunas e templates visuais compartilhados; cada cenário configura seu próprio comportamento. */
export function getTableColumns(data: TableRow[], frozen: boolean): TableColumnProps[] {
    return [
        {
            id: "name",
            header: "Name",
            sort: true,
            style: { width: "23%" },
            body: (row: TableRow) => <span className="font-semibold text-table-text-strong">{row.name}</span>,
            footer: "Total",
        },
        {
            id: "role",
            header: "Role",
            style: { width: "26%" }
        },
        {
            id: "team",
            header: "Department",
            style: { width: "21%" }
        },
        {
            id: "salary",
            header: "Salary",
            align: "right",
            frozen,
            sort: true,
            style: { width: "16%" },
            body: (row: TableRow) => <span className="font-bold text-emerald-500 dark:text-emerald-400">{currency.format(row.salary)}</span>,
            footer: <span className="font-bold text-emerald-500 dark:text-emerald-400">{currency.format(data.reduce((sum, row) => sum + row.salary, 0))}</span>,
        },
        {
            id: "status",
            header: "Status",
            align: "center",
            style: { width: "14%" },
            body: (row: TableRow) => {
                const status = statusStyles[row.status];
                return <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold leading-none ${status.className}`}>{status.label}</span>;
            },
        },
    ];
}
