import { uiSections } from "./style/ui-sections";
import { ContextTitleProps } from "../@types/context";

/**
 * Módulo (Sandbox) - Títulos das seções
 */
export function Title(props: ContextTitleProps) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className={uiSections.titleRow}>
            <div>
                <span className={uiSections.eyebrow}>{props.index} / {props.category}</span>
                <h2 className={uiSections.heading}
                    id={props.id}>{props.title}</h2>
            </div>
            {props.aside && <span className="pb-0.5 text-[11px] text-muted">{props.aside}</span>}
        </div>
    );
}
