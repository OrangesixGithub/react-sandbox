import { uiHeader } from "./style/ui-header";
import { componentNames } from "../../components.ts";

/**
 * Módulo (Sandbox) - Cabeçalho do catálogo
 */
export function Header() {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <header className={uiHeader.root}>
            <div className={uiHeader.location}>
                <span className={uiHeader.locationIcon}>
                    <i
                        aria-hidden="true"
                        className="bi bi-grid-1x2"/>
                </span>
                <span className={uiHeader.title}>Laboratório de componentes</span>
            </div>
            <div className={uiHeader.actions}>
                <span className={uiHeader.meta}>
                    <span className={uiHeader.status}/>
                    Sandbox <span className="text-subtle">·</span> {componentNames.length} componentes
                </span>
                <span className={uiHeader.version}>v{__ORANGESIX_VERSION__}</span>
                <span
                    aria-label="OrangeSix"
                    className={uiHeader.avatar}>OS</span>
            </div>
        </header>
    );
}
