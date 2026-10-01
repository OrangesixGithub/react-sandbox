import { useState } from "react";
import { useForm } from "react-hook-form";
import { Legend } from "../../core/Legend";
import { Calendar } from "@orangesix/react/calendar";

/**
 * Módulo (Sandbox) - Calendar controlado e integração com formulário
 */
export function CalendarStage() {
    const [range, setRange] = useState(false);
    const [multiple, setMultiple] = useState(false);

    const [value, setValue] = useState<string | (string | null)[] | null>(null);
    const { control, watch, reset } = useForm({ defaultValues: { date: null as string | (string | null)[] | null } });
    const formValue = watch("date");
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <section className="mb-10 flex w-full flex-col gap-6">
            <label className="flex items-center gap-2 text-sm">
                <input
                    checked={multiple}
                    type="checkbox"
                    onChange={event => {
                        const checked = event.target.checked;
                        setMultiple(checked);
                        setValue(checked ? [] : null);
                        reset({ date: checked ? [] : null });
                    }}/>Selecionar várias datas</label>
            <label className="flex items-center gap-2 text-sm">
                <input
                    checked={range}
                    disabled={!multiple}
                    type="checkbox"
                    onChange={event => {
                        setRange(event.target.checked);
                        setValue([]);
                        reset({ date: [] });
                    }}/>
                Selecionar intervalo
            </label>
            <div className="flex flex-col gap-2">
                <Calendar
                    required
                    icon="gear"
                    label="Calendar controlado"
                    name="calendar-controlled"
                    placeholder="dd/mm/aaaa"
                    range={range}
                    selectionMode={multiple ? "multiple" : "single"}
                    value={value}
                    onChange={setValue}/>
                <Legend
                    origin="state"
                    value={value}/>
            </div>
            <div className="flex flex-col gap-2">
                <Calendar
                    required
                    control={control}
                    label="Calendar com HookForm"
                    mode="HookForm"
                    name="date"
                    placeholder="dd/mm/aaaa"
                    range={range}
                    selectionMode={multiple ? "multiple" : "single"}/>
                <Legend
                    origin="HookForm"
                    value={formValue}/>
            </div>
        </section>
    );
}

CalendarStage.displayName = "CalendarStage";
