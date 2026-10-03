import { Box } from "@orangesix/react/box";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Legend } from "../../core/Legend";
import { Textarea } from "@orangesix/react/textarea";

/**
 * Módulo (Sandbox) - Textarea controlado e integração com formulário
 */
export function TextareaStage() {
    const [value, setValue] = useState("");
    const { control, watch } = useForm({ defaultValues: { description: "" } });
    const formValue = watch("description");
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
                <Textarea
                    required
                    icon="gear"
                    label="Textarea controlado"
                    name="textarea-controlled"
                    placeholder="Digite um texto"
                    value={value}
                    onChange={setValue}/>
                <Legend
                    origin="state"
                    value={value}/>
            </div>
            <div className="flex flex-col gap-2">
                <Textarea
                    required
                    control={control}
                    label="Textarea com HookForm"
                    mode="HookForm"
                    name="description"
                    placeholder="Digite um texto"/>
                <Legend
                    origin="HookForm"
                    value={formValue}/>
            </div>
        </Box>
    );
}

TextareaStage.displayName = "TextareaStage";
