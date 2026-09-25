import { Title } from "./Title";
import type { ReactNode } from "react";
import { uiProps } from "./style/ui-props";
import { uiSections } from "./style/ui-sections";
import { ApiProps } from "../../components/api/Props";
import { BoxProps } from "../../components/box/Props";
import { ButtonProps } from "../../components/button/Props";
import type { ContextSelectionProps } from "../@types/context";

/**
 * Módulo (Sandbox) - Referência de propriedades
 */
export function Props(props: ContextSelectionProps) {
    let component: ReactNode;

    switch (props.selected) {
        case "API":
            component = <ApiProps/>;
            break;
        case "Box":
            component = <BoxProps/>;
            break;
        case "Button":
            component = <ButtonProps/>;
            break;
        default:
            component = (
                <div className={uiProps.placeholder}>
                    <i aria-hidden="true"
                        className={uiProps.icon}/>
                    <p>As propriedades de {props.selected} serão listadas aqui.</p>
                </div>
            );
    }

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
                category="DOCUMENTAÇÃO DO COMPONENT"
                id="props-title"
                index="02"
                title="Props"/>
            <div className={uiProps.panel}>
                <div className={uiProps.header}>
                    <span>PROPRIEDADE</span>
                    <span>TIPO</span>
                    <span>DESCRIÇÃO</span>
                </div>
                {component}
            </div>
        </section>
    );
}
