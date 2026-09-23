import { Title } from "./Title";
import { uiProps } from "../styles/ui-props";
import { uiSections } from "../styles/ui-sections";
import type { ContextSelectionProps } from "../@types/context";

/**
 * Módulo (Sandbox) - Referência de propriedades
 */
export function Props(props: ContextSelectionProps) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <section aria-labelledby="props-title"
            className={uiSections.section}>
            <Title
                aside="API do componente"
                category="REFERÊNCIA"
                id="props-title"
                index="03"
                title="Props"/>
            <div className={uiProps.panel}>
                <div className={uiProps.header}>
                    <span>PROPRIEDADE</span>
                    <span>TIPO</span>
                    <span>DESCRIÇÃO</span>
                </div>
                <div className={uiProps.placeholder}>
                    <i aria-hidden="true"
                        className={uiProps.icon}/>
                    <p>As propriedades de {props.selected} serão listadas aqui.</p>
                </div>
            </div>
        </section>
    );
}
