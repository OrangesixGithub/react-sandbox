import { Box } from "@orangesix/react/box";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Legend } from "../../core/Legend";
import { Checkbox } from "@orangesix/react/checkbox";

const options = [
    { value: 1, label: "Ler" },
    { value: 2, label: "Escrever" },
    { value: 3, label: "Excluir" },
    { value: 4, label: "Administrar", disabled: true },
];

/**
 * Módulo (Sandbox) - Checkbox controlado e integração com formulário
 */
export function CheckboxStage() {
    const [value, setValue] = useState<Array<string | number>>([1, 3]);
    const { control, watch } = useForm({ defaultValues: { permissions: [2] as Array<string | number> } });
    const formValue = watch("permissions");
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
            <div className="flex flex-col gap-2">
                <Checkbox
                    required
                    icon="gear"
                    label="Checkbox controlado"
                    name="checkbox-controlled"
                    options={options}
                    value={value}
                    onChange={setValue}/>
                <Legend
                    origin="state"
                    value={value}/>
            </div>
            <div className="flex flex-col gap-2">
                <Checkbox
                    required
                    control={control}
                    label="Checkbox com HookForm"
                    mode="HookForm"
                    name="permissions"
                    options={options}/>
                <Legend
                    origin="HookForm"
                    value={formValue}/>
            </div>
        </Box>
    );
}

CheckboxStage.displayName = "CheckboxStage";
