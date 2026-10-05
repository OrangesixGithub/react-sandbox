import { useState } from "react";
import { Box } from "@orangesix/react/box";
import { Request } from "./variants/Request";
import { Snackbar } from "./variants/Snackbar";
import { Functions } from "./variants/Functions";
import { Select } from "@orangesix/react/select";

const variants = {
    request: Request,
    snackbar: Snackbar,
    functions: Functions,
};
type Scenario = keyof typeof variants;

const scenarios = [
    { id: "request", name: "post e response (formulário)" },
    { id: "snackbar", name: "Snackbar e mensagens" },
    { id: "functions", name: "Funções auxiliares" },
];

/**
 * Módulo (Sandbox) - Controles e seleção dos exemplos de Utils
 */
export function UtilsStage() {
    const [scenario, setScenario] = useState<Scenario>("request");
    const Variant = variants[scenario];

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
            <Select
                required
                icon="gear"
                label="Opções"
                mode="Controlled"
                name="utils-scenario"
                options={scenarios}
                size="100"
                value={scenario}
                onChange={value => {
                    if (value in variants) {
                        setScenario(value as Scenario);
                    }
                }}/>
            <Variant/>
        </Box>
    );
}

UtilsStage.displayName = "UtilsStage";
