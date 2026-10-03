import { useState } from "react";
import { PDF } from "@orangesix/react/pdf";
import { Input } from "@orangesix/react/input";
import { Select } from "@orangesix/react/select";
import { Box } from "@orangesix/react/box";

const sample = "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";

const modes = [
    { id: "pagination", name: "Paginação" },
    { id: "total", name: "Todas as páginas" },
];

/**
 * Módulo (Sandbox) - Visualizador de PDF
 */
export function PDFStage() {
    const [file, setFile] = useState(sample);
    const [mode, setMode] = useState<"total" | "pagination">("pagination");

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <Box
            as="section"
            className="flex-wrap gap-3">
            <Input
                label="URL do PDF"
                name="pdf-file"
                size="60"
                value={file}
                onChange={setFile}/>
            <Select
                label="Modo de exibição"
                name="pdf-mode"
                options={modes}
                size="35"
                value={mode}
                onChange={value => setMode(value === "total" ? "total" : "pagination")}/>
            <PDF
                appendTo={window.top?.document.body ?? document.body}
                file={file}
                mode={mode}/>
        </Box>
    );
}

PDFStage.displayName = "PDFStage";
