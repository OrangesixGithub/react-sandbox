import { useState } from "react";
import { Log, useLog } from "../log";
import { Input } from "@orangesix/react/input";
import { Button } from "@orangesix/react/button";
import { Select } from "@orangesix/react/select";
import { Tabview } from "@orangesix/react/tabview";
import { Textarea } from "@orangesix/react/textarea";
import type { IUtilsRequestPostOptions } from "@orangesix/react/utils";
import { ESTADOS, messageFieldClear, post } from "@orangesix/react/utils";

const FORM = "utils-form";

const requests = [
    { label: "Erros (422)", icon: "x-circle", route: "sandbox-api/errors" },
    { label: "Válidos (accept)", icon: "patch-check", route: "sandbox-api/accept" },
    { label: "Lenta (clique 2x)", icon: "hourglass-split", route: "sandbox-api/slow", options: { blockedToManyRequest: true } },
    { label: "field (is-invalid)", icon: "key", route: "sandbox-api/field-invalid" },
    { label: "field (is-valid)", icon: "key", route: "sandbox-api/field-valid" },
    { label: "field (disabled)", icon: "lock", route: "sandbox-api/field-disabled" },
] satisfies { label: string; icon: string; route: string; options?: IUtilsRequestPostOptions }[];

/**
 * Módulo (Sandbox) - Utils: post, response e feedback nos campos do formulário
 */
export function Request() {
    const [name, setName] = useState("");
    const [estado, setEstado] = useState<string | null>(null);
    const [obs, setObs] = useState("");
    const [password, setPassword] = useState("");
    const [cpf, setCpf] = useState("");
    const log = useLog();

    async function send(label: string, route: string, options?: IUtilsRequestPostOptions) {
        try {
            const data = await post(route, { name, estado, obs, password, cpf }, FORM, options);
            log.add(`${label}: resolvido ${JSON.stringify(data)}`);
        } catch (error: any) {
            log.add(`${label}: rejeitado (${error?.response?.status ?? error?.message})`);
        }
    }

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className="flex flex-col gap-6">
            <form
                className="flex flex-col gap-4"
                id={FORM}
                onSubmit={event => event.preventDefault()}>
                <Input
                    label="Nome"
                    name="name"
                    placeholder="Digite um nome"
                    value={name}
                    onChange={setName}/>
                <Select
                    init
                    label="Estado"
                    name="estado"
                    options={ESTADOS}
                    value={estado}
                    onChange={value => setEstado(value as string | null)}/>
                <Textarea
                    label="Observação"
                    name="obs"
                    placeholder="Digite uma observação"
                    value={obs}
                    onChange={setObs}/>
                <Input
                    label="Senha"
                    name="password"
                    placeholder="Digite a senha"
                    type="password"
                    value={password}
                    onChange={setPassword}/>
                <Tabview
                    tabs={[
                        { tab: "Principal", content: <p className="text-sm">Aba selecionada: não recebe destaque.</p> },
                        {
                            tab: "Documentos",
                            content: <Input
                                label="CPF"
                                name="cpf"
                                placeholder="000.000.000-00"
                                value={cpf}
                                onChange={setCpf}/>
                        },
                    ]}
                    tabActiveRender={false}/>
            </form>
            <div className="flex flex-wrap gap-2">
                {requests.map(item => (
                    <Button
                        color="primary"
                        icon={item.icon}
                        key={item.route}
                        label={item.label}
                        size="small"
                        onClick={() => send(item.label, item.route, "options" in item ? item.options : undefined)}/>
                ))}
                <Button
                    color="secondary"
                    icon="eraser"
                    label="Limpar"
                    size="small"
                    onClick={() => messageFieldClear(FORM)}/>
            </div>
            <Log
                lines={log.lines}
                onClear={log.clear}/>
        </div>
    );
}

Request.displayName = "Request";
