import { SectionTitle } from "./SectionTitle";
import { uiSections } from "../../styles/ui-sections";
import { uiVariations } from "../../styles/ui-variations";

const variations = [
  { index: "A", title: "Padrão", description: "Visual principal do componente." },
  { index: "B", title: "Estados", description: "Interação, bloqueio e carregamento." },
  { index: "C", title: "Personalização", description: "Classes e configurações alternativas." },
];

export function VariationsSection() {
  return (
    <section className={uiSections.section} aria-labelledby="variations-title">
      <SectionTitle index="02" category="ESTADOS" title="Variações" id="variations-title" />
      <div className={uiVariations.grid}>
        {variations.map((variation) => (
          <div className={uiVariations.card} key={variation.index}>
            <span className={uiVariations.index}>{variation.index}</span>
            <strong className="text-[13px] text-white">{variation.title}</strong>
            <p className={uiVariations.description}>{variation.description}</p>
            <div className={uiVariations.line} />
          </div>
        ))}
      </div>
    </section>
  );
}
