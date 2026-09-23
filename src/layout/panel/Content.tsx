import { Props } from "../context/Props";
import { Preview } from "../context/Preview";
import { uiContent } from "../styles/ui-content";
import { Variations } from "../context/Variations";
import { PanelContentProps } from "../@types/panel";
import { componentId } from "../../catalog/components";

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
                Biblioteca <span className="text-muted">/</span> Componentes <span className="text-muted">/</span> <strong className="font-medium text-copy">{props.selected}</strong>
            </div>
            <div className={uiContent.intro}>
                <div>
                    <span className={uiContent.eyebrow}>COMPONENTE SELECIONADO</span>
                    <h1 className={uiContent.title}>{props.selected}<span className="text-accent-strong">.</span></h1>
                    <p className="text-[13px] leading-normal text-muted">Área de exploração do componente e suas possibilidades de uso.</p>
                </div>
                <code className={uiContent.importPath}>@orangesix/react/{componentId(props.selected)}</code>
            </div>
            <Preview selected={props.selected}/>
            <Variations/>
            <Props selected={props.selected}/>
        </main>
    );
}
