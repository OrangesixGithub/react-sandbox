import { Box } from "@orangesix/react/box";
import { Modal } from "@orangesix/react/modal";
import { Button } from "@orangesix/react/button";
import { Select } from "@orangesix/react/select";
import { useEffect, useMemo, useState } from "react";
import { generateSales, jsonSize, type SaleRow } from "./data";
import { TablePivot } from "@orangesix/react/tablepivot";
import type { TablePivotLayout, TablePivotProps } from "@orangesix/react/tablepivot";

type ScenarioLayout = Pick<TablePivotProps, "rows" | "columns" | "values" | "filters" | "sort" | "title">;

const labels = {
    regiao: "Região",
    estado: "Estado",
    cidade: "Cidade",
    vendedor: "Vendedor",
    produto: "Produto",
    categoria: "Categoria",
    ano: "Ano",
    mes: "Mês",
    quantidade: "Itens",
    valor: "Faturamento",
};

const scenarios = {
    simple: {
        name: "Simples (linhas + valor)",
        total: 2000,
        layout: { rows: ["regiao"], values: ["valor"] },
    },
    full: {
        name: "Linhas, colunas e valores",
        total: 5000,
        layout: {
            rows: ["regiao", "estado", "cidade"],
            columns: ["ano"],
            values: ["valor", { field: "quantidade", aggregation: "avg" }],
        },
    },
    large: {
        name: "Volume grande (200 mil linhas)",
        total: 200000,
        layout: { rows: ["categoria", "produto"], columns: ["ano"], values: ["valor"] },
    },
    empty: {
        name: "Sem dados",
        total: 0,
        layout: {},
    },
} satisfies Record<string, { name: string, total: number, layout: ScenarioLayout }>;
type Scenario = keyof typeof scenarios;

/**
 * Módulo (Sandbox) - TablePivot com Perspective e a lista de campos
 */
export function TablePivotStage() {
    const [scenario, setScenario] = useState<Scenario>("simple");
    const [seed, setSeed] = useState(7);
    const [layout, setLayout] = useState<ScenarioLayout>(scenarios.simple.layout);
    const [modal, setModal] = useState(false);
    const current = scenarios[scenario];
    const data = useMemo<SaleRow[]>(() => generateSales(current.total, seed), [current.total, seed]);
    const size = useMemo(() => jsonSize(data), [data]);

    useEffect(() => {
        setLayout(current.layout);
    }, [scenario]);

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <Box
            as="section"
            className="gap-3"
            direction="column">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
                <Select
                    required
                    icon="gear"
                    label="Cenário"
                    mode="Controlled"
                    name="tablepivot-scenario"
                    options={Object.entries(scenarios).map(([id, item]) => ({ id, name: item.name }))}
                    size="100"
                    value={scenario}
                    onChange={value => {
                        if (value in scenarios) {
                            setScenario(value as Scenario);
                        }
                    }}/>
                <div className="flex flex-wrap items-end gap-2">
                    <Button
                        color="secondary"
                        label="Novos dados"
                        size="small"
                        onClick={() => setSeed(seed + 1)}/>
                    <Button
                        color="secondary"
                        label="Trocar layout (vendedor × mês)"
                        size="small"
                        onClick={() => setLayout({
                            rows: ["vendedor"],
                            columns: ["mes"],
                            values: ["quantidade"],
                            sort: { vendedor: "desc" },
                            title: "Itens por vendedor",
                        })}/>
                    <Button
                        icon="window"
                        label="Abrir em modal"
                        size="small"
                        onClick={() => setModal(true)}/>
                </div>
            </div>
            <p className="mx-2 text-sm text-neutral-500">
                {data.length.toLocaleString("pt-BR")} linhas · {size} MB em JSON
            </p>
            <TablePivot
                columns={layout.columns}
                data={data}
                filters={layout.filters}
                height={400}
                key={scenario}
                labels={labels}
                rows={layout.rows}
                sort={layout.sort}
                title={layout.title}
                values={layout.values}/>
            <Modal
                maximizable
                appendTo="self"
                header="TablePivot dentro da modal"
                sizes="extra-large"
                visible={modal}
                onVisible={setModal}>
                <TablePivot
                    columns={layout.columns}
                    data={data}
                    filters={layout.filters}
                    height={450}
                    id="pivotModal"
                    labels={labels}
                    rows={layout.rows}
                    sort={layout.sort}
                    title={layout.title}
                    values={layout.values}/>
            </Modal>
        </Box>
    );
}

TablePivotStage.displayName = "TablePivotStage";
