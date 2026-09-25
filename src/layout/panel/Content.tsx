import { Props } from "../context/Props";
import { Preview } from "../context/Preview";
import { uiContent } from "./style/ui-content";
import { componentId } from "../../components.ts";
import type { PanelContentProps } from "../@types/panel";

/**
 * Módulo (Sandbox) - Apresentação do componente
 */
export function Content(props: PanelContentProps) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <main className={uiContent.root}>
            <div className={uiContent.breadcrumb}>
                Biblioteca <i
                    aria-hidden="true"
                    className="bi bi-chevron-right"/> Componentes <i
                    aria-hidden="true"
                    className="bi bi-chevron-right"/> <strong className="font-medium text-copy">{props.selected}</strong>
            </div>
            <div className={uiContent.intro}>
                <div>
                    <span className={uiContent.eyebrow}>COMPONENTE SELECIONADO</span>
                    <h1 className={uiContent.title}>{props.selected}</h1>
                    <p className={uiContent.description}>Visualize o componente, ajuste as propriedades e consulte a API.</p>
                </div>
                <code className={uiContent.importPath}>@orangesix/react/{componentId(props.selected)}</code>
            </div>
            <Preview
                apiDemo={props.apiDemo}
                boxDemo={props.boxDemo}
                buttonDemo={props.buttonDemo}
                inputDemo={props.inputDemo}
                selected={props.selected}/>
            <Props selected={props.selected}/>
        </main>
    );
}
