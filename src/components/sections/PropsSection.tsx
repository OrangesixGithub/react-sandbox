import type { ComponentName } from "../../catalog/components";
import { uiSections } from "../../styles/ui-sections";
import { uiProps } from "../../styles/ui-props";
import { SectionTitle } from "./SectionTitle";

export function PropsSection({ selected }: { selected: ComponentName }) {
  return (
    <section className={uiSections.section} aria-labelledby="props-title">
      <SectionTitle index="03" category="REFERÊNCIA" title="Props" id="props-title" aside="API do componente" />
      <div className={uiProps.panel}>
        <div className={uiProps.header}>
          <span>PROPRIEDADE</span>
          <span>TIPO</span>
          <span>DESCRIÇÃO</span>
        </div>
        <div className={uiProps.placeholder}>
          <i className={uiProps.icon} aria-hidden="true" />
          <p>As propriedades de {selected} serão listadas aqui.</p>
        </div>
      </div>
    </section>
  );
}
