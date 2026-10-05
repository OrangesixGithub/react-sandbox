import { useState } from "react";
import { Log, useLog } from "../log";
import { Button } from "@orangesix/react/button";
import { Select } from "@orangesix/react/select";
import { post, sendMessage } from "@orangesix/react/utils";
import type { IUtilsMessageOptions } from "@orangesix/react/utils";

type Library = keyof IUtilsMessageOptions;

const snackbars = [
    { type: "success", color: "success", title: "Registro salvo", text: "As alterações foram gravadas com sucesso." },
    { type: "warning", color: "warning", title: "Armazenamento quase cheio", text: "Você já usou 92% do espaço disponível." },
    { type: "error", color: "danger", title: "Falha ao salvar", text: "Algo deu errado. Tente novamente." },
    { type: "info", color: "info", title: "Nova funcionalidade", text: "A busca rápida está disponível: pressione Ctrl+K." },
] as const;

const libraries = [
    { id: "snackbar", name: "Snackbar" },
    { id: "sweetAlert", name: "SweetAlert (toast)" },
];

/**
 * Módulo (Sandbox) - Utils: mensagens por tipo na snackbar ou no toast do SweetAlert
 */
export function Snackbar() {
    const [library, setLibrary] = useState<Library>("snackbar");
    const log = useLog();

    async function send() {
        try {
            await post("sandbox-api/success", {}, undefined, { messageLibrary: library });
            log.add(`post com messageLibrary: "${library}"`);
        } catch (error: any) {
            log.add(`post rejeitado (${error?.response?.status ?? error?.message})`);
        }
    }

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className="flex flex-col gap-6">
            <Select
                required
                icon="chat-square-text"
                label="Biblioteca"
                mode="Controlled"
                name="utils-library"
                options={libraries}
                size="100"
                value={library}
                onChange={value => setLibrary(value === "sweetAlert" ? "sweetAlert" : "snackbar")}/>
            <div className="flex flex-wrap gap-2">
                {snackbars.map(item => (
                    <Button
                        color={item.color}
                        icon="chat-square-text"
                        key={item.type}
                        label={`${item.type}`}
                        size="small"
                        onClick={() => {
                            sendMessage({
                                message: { type: item.type, title: item.title, text: item.text },
                                library,
                                type: library === "sweetAlert" ? "toast" : "message",
                            });
                            log.add(`sendMessage (${library}): ${item.type}`);
                        }}/>
                ))}
                <Button
                    color="primary"
                    icon="send"
                    label="post (message da resposta)"
                    size="small"
                    onClick={send}/>
            </div>
            <Log
                lines={log.lines}
                onClear={log.clear}/>
        </div>
    );
}

Snackbar.displayName = "Snackbar";
