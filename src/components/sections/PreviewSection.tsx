import type { ComponentName } from "../../catalog/components";
import { uiSections } from "../../styles/ui-sections";
import { uiPreview } from "../../styles/ui-preview";
import { SectionTitle } from "./SectionTitle";

export function PreviewSection({ selected }: { selected: ComponentName }) {
  return (
    <section className={uiSections.section} aria-labelledby="preview-title">
      <SectionTitle index="01" category="VISUALIZAÇÃO" title="Prévia" id="preview-title" aside="Canvas do componente" />
      <div className={uiPreview.shell}>
        <div className={uiPreview.toolbar}>
          <span className="flex items-center gap-2"><span className={uiPreview.liveDot} /> ÁREA DE PRÉVIA</span>
          <span>100% · Desktop</span>
        </div>
        <div className={uiPreview.canvas}>
          <div className={uiPreview.placeholder}>
            <div className={uiPreview.glyph} aria-hidden="true">
              <i className={uiPreview.glyphIcon} />
            </div>
            <strong className="block text-[17px] text-white">{selected}</strong>
            <p className={uiPreview.description}>O componente selecionado será exibido neste espaço.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
