import { Title } from "./Title";
import type { ReactNode } from "react";
import { uiPreview } from "./style/ui-preview";
import { uiSections } from "./style/ui-sections";
import type { PanelContentProps } from "../@types/panel";
import { ApiPreview } from "../../components/api/Preview";

/**
 * Módulo (Sandbox) - Prévia do componente
 */
export function Preview(props: PanelContentProps) {
    let componentPreview: ReactNode;

    switch (props.selected) {
        case "API":
            componentPreview = <ApiPreview apiDemo={props.apiDemo}/>;
            break;
        default:
            componentPreview = null;
    }

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
                    {componentPreview}
                </div>
            </div>
        </section>
    );
}
