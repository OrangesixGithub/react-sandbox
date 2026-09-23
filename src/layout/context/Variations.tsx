import { Title } from "./Title";
import { uiSections } from "./style/ui-sections";
import { uiVariations } from "./style/ui-variations";

const variations = [
    { index: "A", title: "Padrão", description: "Visual principal do componente." },
    { index: "B", title: "Estados", description: "Interação, bloqueio e carregamento." },
    { index: "C", title: "Personalização", description: "Classes e configurações alternativas." },
];

/**
 * Módulo (Sandbox) - Variações do componente
 */
export function Variations() {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <section aria-labelledby="variations-title"
            className={uiSections.section}>
            <Title
                category="ESTADOS"
                id="variations-title"
                index="02"
                title="Variações"/>
            <div className={uiVariations.grid}>
                {variations.map((variation) => (
                    <div className={uiVariations.card}
                        key={variation.index}>
                        <span className={uiVariations.index}>{variation.index}</span>
                        <strong className="text-[13px] text-white">{variation.title}</strong>
                        <p className={uiVariations.description}>{variation.description}</p>
                        <div className={uiVariations.line}/>
                    </div>
                ))}
            </div>
        </section>
    );
}
