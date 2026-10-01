import { useState } from "react";
import { useForm } from "react-hook-form";
import { Legend } from "../../core/Legend";
import { Switch } from "@orangesix/react/switch";

/**
 * Módulo (Sandbox) - Switch controlado e integração com formulário
 */
export function SwitchStage() {
    const [value, setValue] = useState("sim");
    const { control, watch } = useForm({ defaultValues: { notify: "nao" } });
    const formValue = watch("notify");
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <section className="mb-10 flex w-full flex-col gap-6">
            <div className="flex flex-col gap-2">
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
                <Legend
                    origin="state"
                    value={value}/>
            </div>
            <div className="flex flex-col gap-2">
                <Switch
                    required
                    control={control}
                    label="Switch com HookForm"
                    legend="Receber notificações"
                    mode="HookForm"
                    name="notify"
                    valueFalse="nao"
                    valueTrue="sim"/>
                <Legend
                    origin="HookForm"
                    value={formValue}/>
            </div>
        </section>
    );
}

SwitchStage.displayName = "SwitchStage";
