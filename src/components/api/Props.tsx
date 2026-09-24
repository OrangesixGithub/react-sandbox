import { TypeBadges } from "../TypeBadges";
import { uiApiProps } from "./style/ui-props";

const apiProps = [
    { name: "label", type: "string", description: "Texto do InputLabel; sem valor, o rótulo não é exibido." },
    { name: "icon / iconPrefix", type: "string", description: "Ícone e prefixo usados pelo InputLabel. O padrão é pi pi-." },
    { name: "required", type: "boolean", description: "Mostra o indicador no rótulo e é encaminhado por InputProps." },
    { name: "id / name", type: "string", description: "Associam rótulo, campo e feedback. name aceita caminhos aninhados." },
    { name: "mode", type: "Controlled | HookForm", description: "InputFeedback só exibe mensagens no modo HookForm." },
    { name: "errors", type: "FieldErrors", description: "Erros do React Hook Form lidos por InputFeedback." },
    { name: "disabled / placeholder", type: "boolean / string", description: "Encaminhados ao controle por InputProps." },
    { name: "className / ref", type: "string / ref", description: "Encaminhados ao controle por InputProps." },
] as const;

/**
 * Módulo (Sandbox) - Propriedades dos helpers da API
 */
export function ApiProps() {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div>
            {apiProps.map((item) => (
                <div
                    className={uiApiProps.row}
                    key={item.name}>
                    <code className={uiApiProps.name}>{item.name}</code>
                    <span className={uiApiProps.type}>
                        <TypeBadges value={item.type}/>
                    </span>
                    <span className={uiApiProps.description}>
                        {item.description}
                    </span>
                </div>
            ))}
        </div>
    );
}
