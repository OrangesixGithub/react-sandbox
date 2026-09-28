import { uiTypeBadge, uiTypeBadges } from "./style/ui-type-badges";

type TypeBadgesProps = {
    value: string;
};

type BadgeKind = "string" | "boolean" | "number" | "primitive" | "reference";

function badgeKind(type: string): BadgeKind {
    switch (type) {
        case "string":
        case "boolean":
        case "number":
            return type;
        case "bigint":
        case "symbol":
        case "null":
        case "undefined":
            return "primitive";
        default:
            return "reference";
    }
}

/**
 * Módulo (Sandbox) - Identificação visual dos tipos de propriedades
 */
export function TypeBadges(props: TypeBadgesProps) {
    const parts = props.value.split(/([|/])/).map((part) => part.trim()).filter(Boolean);

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <span className={uiTypeBadges.list}>
            {parts.map((part, index) => part === "|" || part === "/" ? (
                <span className={uiTypeBadges.separator}
                    key={index}>{part}</span>
            ) : (
                <code className={uiTypeBadge({ kind: badgeKind(part) })}
                    key={index}>{part}</code>
            ))}
        </span>
    );
}
