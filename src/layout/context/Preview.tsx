import { Title } from "./Title";
import { uiPreview } from "../styles/ui-preview";
import { uiSections } from "../styles/ui-sections";
import type { ContextSelectionProps } from "../@types/context";

/**
 * Módulo (Sandbox) - Prévia do componente
 */
export function Preview(props: ContextSelectionProps) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <section aria-labelledby="preview-title"
            className={uiSections.section}>
            <Title
                aside="Canvas do componente"
                category="VISUALIZAÇÃO"
                id="preview-title"
                index="01"
                title="Prévia"/>
            <div className={uiPreview.shell}>
                <div className={uiPreview.toolbar}>
                    <span className="flex items-center gap-2"><span className={uiPreview.liveDot}/> ÁREA DE PRÉVIA</span>
                    <span>100% · Desktop</span>
                </div>
                <div className={uiPreview.canvas}>
                    <div className={uiPreview.placeholder}>
                        <div aria-hidden="true"
                            className={uiPreview.glyph}>
                            <i className={uiPreview.glyphIcon}/>
                        </div>
                        <strong className="block text-[17px] text-white">{props.selected}</strong>
                        <p className={uiPreview.description}>O componente selecionado será exibido neste espaço.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
