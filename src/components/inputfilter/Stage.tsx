import { useState } from "react";
import { InputFilter } from "@orangesix/react/inputfilter";

/**
 * Módulo (Sandbox) - InputFilter controlado
 */
export function InputFilterStage() {
    const [value, setValue] = useState<string | null>(null);
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <section className="mb-10 flex w-full flex-col gap-6">
            <div className="flex flex-col gap-2">
                <InputFilter
                    icon="gear"
                    label="InputFilter controlado"
                    name="inputfilter-controlled"
                    placeholder="Digite um texto"
                    value={value ?? undefined}
                    onChange={setValue}/>
                <p className="max-w-full overflow-x-auto whitespace-nowrap text-xs text-neutral-500 scrollbar-themed">Valor do state: <code className="text-primary-400">{JSON.stringify(value)}</code></p>
            </div>
        </section>
    );
}

InputFilterStage.displayName = "InputFilterStage";
