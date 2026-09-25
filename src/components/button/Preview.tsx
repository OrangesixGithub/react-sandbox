import { useState } from "react";
import type { ButtonDemoState } from "./state";
import { Button } from "@orangesix/react/button";

type ButtonPreviewProps = {
    buttonDemo: ButtonDemoState;
};

/**
 * Módulo (Sandbox) - Demonstração dos estados do Button
 */
export function ButtonPreview(props: ButtonPreviewProps) {
    const [clicks, setClicks] = useState(0);
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className="flex flex-col items-start gap-5 text-copy">
            <div className="flex flex-wrap items-center gap-4">
                <Button
                    color={props.buttonDemo.color}
                    disabled={props.buttonDemo.disabled}
                    icon={props.buttonDemo.icon || undefined}
                    iconPos={props.buttonDemo.iconPos}
                    isLink={props.buttonDemo.isLink}
                    isLoading={props.buttonDemo.isLoading}
                    label={props.buttonDemo.label}
                    size={props.buttonDemo.size === "normal" ? undefined : props.buttonDemo.size}
                    onClick={() => setClicks(count => count + 1)}/>
                <Button
                    rounded
                    badge="3"
                    color="primary"
                    icon="save"
                    label="Gravar"/>
                <Button
                    className="text-indigo-600 bg-indigo-300 hover:bg-indigo-200"
                    icon="gear"
                    label="Customizado"/>
            </div>
            <p className="text-xs text-muted">Cliques no botão principal: {clicks}</p>
        </div>
    );
}
