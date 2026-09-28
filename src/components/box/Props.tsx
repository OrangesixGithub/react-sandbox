import { TypeBadges } from "../../core/TypeBadges";
import { uiApiProps } from "../api/style/ui-props";

const boxProps = [
    { name: "size", type: "string | objeto", description: "Largura percentual fixa ou por breakpoint: { base: '100', md: '50', lg: '25' }. Padrão: 100%." },
    { name: "as", type: "HTML tag", description: "Elemento HTML renderizado, como div, section ou article. Padrão: div." },
    { name: "direction", type: "row | column", description: "Direção dos filhos no layout flexível. Padrão: row." },
    { name: "align", type: "Tailwind", description: "Uma classe de alinhamento, inclusive com prefixo responsivo." },
    { name: "justify", type: "Tailwind", description: "Uma classe de distribuição, inclusive com prefixo responsivo." },
    { name: "className", type: "string", description: "Classes adicionais para a caixa." },
    { name: "css", type: "CSSProperties", description: "Estilo inline; pode substituir a largura definida por size." },
    { name: "id", type: "string", description: "Identificador aplicado ao elemento HTML renderizado." },
    { name: "children", type: "ReactNode", description: "Conteúdo da caixa." },
] as const;

/**
 * Módulo (Sandbox) - Propriedades do Box
 */
export function BoxProps() {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div>
            {boxProps.map(item => (
                <div
                    className={uiApiProps.row}
                    key={item.name}>
                    <code className={uiApiProps.name}>{item.name}</code>
                    <span className={uiApiProps.type}><TypeBadges value={item.type}/></span>
                    <span className={uiApiProps.description}>{item.description}</span>
                </div>
            ))}
        </div>
    );
}
