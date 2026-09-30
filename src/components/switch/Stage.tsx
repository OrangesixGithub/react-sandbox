import { useState } from "react";
import { Switch } from "@orangesix/react/switch";

/**
 * Módulo (Sandbox) - Switch controlado e integração com formulário
 */
export function SwitchStage() {
    const [value, setValue] = useState("sim");
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <section className="mb-10 flex w-full flex-col gap-6">
            <Switch
                required
                icon="gear"
                label="Switch controlado"
                legend="Receber notificações"
                name="switch-controlled"
                value={value}
                valueFalse="nao"
                valueTrue="sim"
                onChange={setValue}/>
        </section>
    );
}

SwitchStage.displayName = "SwitchStage";
