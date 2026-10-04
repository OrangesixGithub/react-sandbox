import { Box } from "@orangesix/react/box";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Legend } from "../../core/Legend";
import { Input } from "@orangesix/react/input";
import { Checkbox } from "@orangesix/react/checkbox";

/**
 * Módulo (Sandbox) - Input controlado e integração com formulário
 */
export function InputStage() {
    const [value, setValue] = useState("");
    const [showLabel, setShowLabel] = useState(true);
    const { control, watch } = useForm({ defaultValues: { name: "" } });
    const formValue = watch("name");
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <Box
            as="section"
            className="mb-10 gap-6"
            direction="column">
            <Checkbox
                mode="Controlled"
                name="input-show-label"
                options={[{ value: "show", label: "Exibir label" }]}
                sizes="small"
                value={showLabel ? ["show"] : []}
                onChange={values => setShowLabel(values.includes("show"))}/>
            <div className="flex flex-col gap-2">
                <Input
                    required
                    icon="gear"
                    label="Input controlado"
                    name="input-controlled"
                    placeholder="Digite um texto"
                    showLabel={showLabel}
                    value={value}
                    onChange={setValue}/>
                <Legend
                    origin="state"
                    value={value}/>
            </div>
            <div className="flex flex-col gap-2">
                <Input
                    required
                    control={control}
                    label="Input com HookForm"
                    mode="HookForm"
                    name="name"
                    placeholder="Digite um texto"
                    showLabel={showLabel}/>
                <Legend
                    origin="HookForm"
                    value={formValue}/>
            </div>
        </Box>
    );
}

InputStage.displayName = "InputStage";
