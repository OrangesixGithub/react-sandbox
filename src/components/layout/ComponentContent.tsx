import { componentId, type ComponentName } from "../../catalog/components";
import { uiContent } from "../../styles/ui-content";
import { PreviewSection } from "../sections/PreviewSection";
import { PropsSection } from "../sections/PropsSection";
import { VariationsSection } from "../sections/VariationsSection";

export function ComponentContent({ selected }: { selected: ComponentName }) {
  return (
    <main className={uiContent.root}>
      <div className={uiContent.breadcrumb}>
        Biblioteca <span className="text-muted">/</span> Componentes <span className="text-muted">/</span> <strong className="font-medium text-copy">{selected}</strong>
      </div>
      <div className={uiContent.intro}>
        <div>
          <span className={uiContent.eyebrow}>COMPONENTE SELECIONADO</span>
          <h1 className={uiContent.title}>{selected}<span className="text-accent-strong">.</span></h1>
          <p className="text-[13px] leading-normal text-muted">Área de exploração do componente e suas possibilidades de uso.</p>
        </div>
        <code className={uiContent.importPath}>@orangesix/react/{componentId(selected)}</code>
      </div>
      <PreviewSection selected={selected} />
      <VariationsSection />
      <PropsSection selected={selected} />
    </main>
  );
}
