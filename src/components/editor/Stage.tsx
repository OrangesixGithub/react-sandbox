import { Box } from "@orangesix/react/box";
import { useState } from "react";
import { Legend } from "../../core/Legend";
import { Editor } from "@orangesix/react/editor";

/**
 * Módulo (Sandbox) - Editor de texto controlado
 */
export function EditorStage() {
    const [value, setValue] = useState<any>("");
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
                <Editor
                    required
                    height={200}
                    icon="pencil"
                    label="Editor controlado"
                    name="editor-controlled"
                    options="full"
                    placeholder="Digite e formate um texto"
                    value={value}
                    onChange={setValue}/>
                <Legend
                    origin="state"
                    value={value}/>
            </div>
        </Box>
    );
}

EditorStage.displayName = "EditorStage";
