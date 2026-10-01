import { useState } from "react";
import { Legend } from "../../core/Legend";
import { Accordion } from "@orangesix/react/accordion";

const tabs = [
    { header: "Primeira aba", content: "Conteúdo da primeira aba." },
    { header: "Segunda aba", content: "Conteúdo da segunda aba." },
    { header: "Aba desabilitada", content: "Não pode ser aberta.", disabled: true },
    { header: "Quarta aba", content: "Conteúdo da quarta aba." },
];

/**
 * Módulo (Sandbox) - Accordion controlado e com várias abas abertas
 */
export function AccordionStage() {
    const [active, setActive] = useState<number | number[] | null>(0);
    const [multiple, setMultiple] = useState<number | number[] | null>([0, 1]);
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <section className="mb-10 flex w-full flex-col gap-6">
            <div className="flex flex-col gap-2">
                <Accordion
                    activeIndex={active}
                    tabs={tabs}
                    onChange={event => setActive(event.index)}/>
                <Legend
                    origin="state"
                    value={active}/>
            </div>
            <div className="flex flex-col gap-2">
                <Accordion
                    multiple
                    activeIndex={multiple}
                    tabs={tabs}
                    onChange={event => setMultiple(event.index)}/>
                <Legend
                    origin="state"
                    value={multiple}/>
            </div>
        </section>
    );
}

AccordionStage.displayName = "AccordionStage";
