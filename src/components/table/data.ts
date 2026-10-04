export type TableRow = {
    id: number;
    name: string;
    role: string;
    team: string;
    salary: number;
    status: "active" | "leave" | "inactive";
    order: number;
    details: string;
};

export const tableData: TableRow[] = [
    { id: 1, name: "Marcus Liu", role: "Staff Engineer", team: "Engineering", salary: 142000, status: "active", order: 1, details: "marcus@vela.io" },
    { id: 2, name: "Elena Park", role: "VP Sales", team: "Sales", salary: 168500, status: "active", order: 2, details: "elena@vela.io" },
    { id: 3, name: "David Chen", role: "Product Designer", team: "Design", salary: 118200, status: "leave", order: 3, details: "david@vela.io" },
    { id: 4, name: "Sarah Kim", role: "Growth Lead", team: "Marketing", salary: 104900, status: "active", order: 4, details: "sarah@vela.io" },
    { id: 5, name: "James Wright", role: "Backend Engineer", team: "Engineering", salary: 128700, status: "active", order: 5, details: "james@vela.io" },
    { id: 6, name: "Priya Nair", role: "Financial Analyst", team: "Finance", salary: 96400, status: "inactive", order: 6, details: "priya@vela.io" },
];

/** Cria registros independentes para os cenários que alteram os dados. */
export function createTableData(): TableRow[] {
    return tableData.map(row => ({ ...row }));
}

/** Mantém os registros contíguos por grupo, como o PrimeReact exige. */
export function getGroupedData(): TableRow[] {
    return [...tableData].sort((left, right) => left.team.localeCompare(right.team));
}
