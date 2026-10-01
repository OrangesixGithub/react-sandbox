import { useState } from "react";
import { Editor } from "@orangesix/react/editor";

/**
 * Módulo (Sandbox) - Editor de texto controlado
 */
export function EditorStage() {
    const [value, setValue] = useState("");
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <section className="mb-10 flex w-full flex-col gap-6">
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
                <p className="max-w-full overflow-x-auto whitespace-nowrap text-xs text-neutral-500 scrollbar-themed">Valor do state: <code className="text-primary-400">{JSON.stringify(value)}</code></p>
            </div>
        </section>
    );
}

EditorStage.displayName = "EditorStage";
