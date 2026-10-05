import { Log, useLog } from "../log";
import { Button } from "@orangesix/react/button";
import { getCep, getElementDOM, handleDateFormat, handleHours, handleNumber } from "@orangesix/react/utils";

/**
 * Módulo (Sandbox) - Utils: saídas de handle*, getElementDOM e getCep
 */
export function Functions() {
    const log = useLog();

    async function run() {
        log.add(`handleNumber("1.234,56") = ${handleNumber("1.234,56")} · money = ${handleNumber("1.234,56", "money")} · vazio = "${handleNumber("", "money")}"`);
        log.add(`handleNumber("1234567.8", "money") = ${handleNumber("1234567.8", "money")} · "-10,5" = ${handleNumber("-10,5")}`);
        log.add(`handleDateFormat("2024-01-15", "dd/MM/yyyy HH:mm") = ${handleDateFormat("2024-01-15", "dd/MM/yyyy HH:mm")} · Laravel = ${handleDateFormat("2024-01-15T10:30:00.000000Z", "dd/MM/yyyy HH:mm:ss")}`);
        log.add(`handleHours: "830" = ${handleHours("830")} · "8.3" = ${handleHours("8.3")} · "1.5" = ${handleHours("1.5")}`);
        const one = await getElementDOM<Element>("body");
        const all = await getElementDOM<Element[]>("button", 300, true);
        log.add(`getElementDOM: "body" = ${one?.tagName} · "button" com all = ${Array.isArray(all)} (${all?.length} botões)`);
        log.add(`getCep("01001-000") = ${JSON.stringify(await getCep("01001-000"))}`);
        log.add(`getCep("99999-999") = ${JSON.stringify(await getCep("99999-999"))}`);
    }

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
                <Button
                    color="primary"
                    icon="play"
                    label="Executar (handle, getElementDOM, getCep)"
                    size="small"
                    onClick={run}/>
            </div>
            <Log
                lines={log.lines}
                onClear={log.clear}/>
        </div>
    );
}

Functions.displayName = "Functions";
