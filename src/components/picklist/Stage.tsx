import { Box } from "@orangesix/react/box";
import { useState } from "react";
import { Legend } from "../../core/Legend";
import { PickList } from "@orangesix/react/picklist";
import type { PickListDataProps } from "@orangesix/react/picklist";

const data: PickListDataProps[] = [
    { id: 1, label: "Vendas" },
    { id: 2, label: "Suporte" },
    { id: 3, label: "Financeiro", active: true },
    { id: 4, label: "Operações" },
    { id: 5, label: "Marketing" },
    { id: 6, label: "Recursos humanos" },
];

/**
 * Módulo (Sandbox) - PickList com filtro e retorno dos itens ativos e inativos
 */
export function PickListStage() {
    const [value, setValue] = useState<PickListDataProps[]>(data);
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <Box
            as="section"
            className="mb-10 gap-6"
            direction="column">
            <div className="flex flex-col gap-2">
                <PickList
                    data={data}
                    sourceHeader="Disponíveis"
                    targetHeader="Selecionados"
                    onChange={setValue}/>
                <Legend
                    origin="state"
                    value={value}/>
            </div>
        </Box>
    );
}

PickListStage.displayName = "PickListStage";
