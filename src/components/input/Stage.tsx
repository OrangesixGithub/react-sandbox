import { useState } from "react";
import { Box } from "@orangesix/react/box";
import { Input } from "@orangesix/react/input";

/**
 * Módulo (Sandbox) - Galeria dos tipos de Input no modo selecionado
 */
export function InputStage() {
    const [values, setValues] = useState("");
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <Box as="section">
            <Input
                required
                icon="gear"
                id="input-example-text"
                label="Entrada de texto"
                name="input-example"
                placeholder="Digite um texto"
                size={{ base: "100", lg: "25" }}
                type="text"
                value={values}
                onChange={setValues}/>
            <Input
                required
                icon="gear"
                id="input-example-number"
                label="Entrada de número"
                name="input-example-number"
                placeholder="Digite um número"
                size={{ base: "100", lg: "25" }}
                type="number"
                value={values}
                onChange={setValues}/>
        </Box>
    );
}
