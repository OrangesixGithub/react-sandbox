import { TypeBadges } from "../TypeBadges";
import { uiApiProps } from "../api/style/ui-props";

const buttonProps = [
    { name: "label", type: "string", description: "Texto exibido no botão." },
    { name: "children", type: "ReactNode", description: "Conteúdo interno personalizado; substitui label, icon e badge quando informado." },
    { name: "icon / iconPos / iconPrefix", type: "string", description: "Ícone e posição em relação ao rótulo. O prefixo padrão é pi pi-." },
    { name: "color", type: "ColorProps", description: "Cor semântica do botão." },
    { name: "size", type: "small | large", description: "Tamanho do botão; sem valor usa o tamanho normal." },
    { name: "rounded", type: "boolean", description: "Deixa o botão totalmente arredondado." },
    { name: "badge / badgeClassName", type: "string", description: "Indicador e classes adicionais." },
    { name: "isLink", type: "boolean", description: "Aparência de link." },
    { name: "isLoading / disabled", type: "boolean", description: "Carregamento ou bloqueio de cliques." },
    { name: "isVisible", type: "boolean", description: "Define se o botão fica visível; o padrão é true." },
    { name: "type / onClick", type: "button | submit | reset / função", description: "Ação do botão HTML." },
    { name: "className / css / id / ref", type: "atributos", description: "Personalização e referência ao botão HTML." },
] as const;

/**
 * Módulo (Sandbox) - Propriedades do Button
 */
export function ButtonProps() {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div>
            {buttonProps.map(item => (
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
