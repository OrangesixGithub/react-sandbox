import type { BoxDemoState } from "./state";
import { SelectControl } from "../form/Controls";
import { uiFormControls } from "../form/style/ui-controls";

type BoxControlsProps = {
    boxDemo: BoxDemoState;
    onBoxDemoChange: (state: BoxDemoState) => void;
};

const directionOptions = [{ label: "Linha", value: "row" }, { label: "Coluna", value: "column" }] as const;
const elementOptions = [{ label: "div", value: "div" }, { label: "section", value: "section" }, { label: "article", value: "article" }] as const;
const alignOptions = [{ label: "Início", value: "items-start" }, { label: "Centro", value: "items-center" }, { label: "Fim", value: "items-end" }] as const;
const justifyOptions = [{ label: "Início", value: "justify-start" }, { label: "Centro", value: "justify-center" }, { label: "Entre", value: "justify-between" }] as const;

/**
 * Módulo (Sandbox) - Controles do layout Box
 */
export function BoxControls(props: BoxControlsProps) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className={uiFormControls.fields}>
            <SelectControl
                label="Elemento HTML"
                options={elementOptions}
                value={props.boxDemo.element}
                onChange={(element) => props.onBoxDemoChange({ ...props.boxDemo, element })}/>
            <SelectControl
                label="Direção"
                options={directionOptions}
                value={props.boxDemo.direction}
                onChange={(direction) => props.onBoxDemoChange({ ...props.boxDemo, direction })}/>
            <SelectControl
                label="Alinhamento"
                options={alignOptions}
                value={props.boxDemo.align}
                onChange={(align) => props.onBoxDemoChange({ ...props.boxDemo, align })}/>
            <SelectControl
                label="Distribuição"
                options={justifyOptions}
                value={props.boxDemo.justify}
                onChange={(justify) => props.onBoxDemoChange({ ...props.boxDemo, justify })}/>
        </div>
    );
}
