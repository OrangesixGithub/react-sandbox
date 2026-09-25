import type { PanelControlsProps } from "../@types/panel";
import { ApiControls } from "../../components/api/Controls";
import { BoxControls } from "../../components/box/Controls";
import { uiControlField, uiControls } from "./style/ui-controls";
import { ButtonControls } from "../../components/button/Controls";

/**
 * Módulo (Sandbox) - Controles do playground
 */
export function Controls(props: PanelControlsProps) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <aside
            aria-label="Painel de controles"
            className={uiControls.root}>
            <div className={uiControls.inner}>
                <span className={uiControls.eyebrow}>PLAYGROUND</span>
                <h2 className={uiControls.heading}>
                    Controles
                </h2>
                <p className="text-xs leading-relaxed text-muted">
                    Ajustes para testar as props da prévia.
                </p>
                {props.selected === "API" ? (
                    <ApiControls
                        apiDemo={props.apiDemo}
                        onApiDemoChange={props.onApiDemoChange}/>
                ) : props.selected === "Box" ? (
                    <BoxControls
                        boxDemo={props.boxDemo}
                        onBoxDemoChange={props.onBoxDemoChange}/>
                ) : props.selected === "Button" ? (
                    <ButtonControls
                        buttonDemo={props.buttonDemo}
                        onButtonDemoChange={props.onButtonDemoChange}/>
                ) : <div className={uiControls.skeletonGrid}>
                    {[0, 1, 2, 3].map((index) => (
                        <div className="grid gap-2"
                            key={index}>
                            <span className={uiControls.skeletonBar}/>
                            <span
                                className={uiControlField({ type: index === 3 ? "switch" : "input" })}/>
                        </div>
                    ))}
                </div>}
                {props.selected !== "API" && props.selected !== "Box" && props.selected !== "Button" && <div className={uiControls.note}>
                    <i aria-hidden="true"
                        className={uiControls.noteIcon}/>
                    <p className="text-[11px] leading-normal text-muted">
                        Os controles específicos de cada componente serão definidos junto
                        com as prévias.
                    </p>
                </div>}
            </div>
        </aside>
    );
}
