import logo from "@assets/orange.png";
import { uiHeader } from "./style/ui-header";
import { componentNames } from "../../catalog/components";

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
            <div className="flex items-center gap-3">
                <img
                    alt="Logo"
                    className="h-12 w-12 object-contain"
                    src={logo}/>
                <div>
                    <span className={uiHeader.eyebrow}>OrangeSix / REACT v{__ORANGESIX_VERSION__}</span>
                    <strong className={uiHeader.title}>
                        Laboratório de components UI
                    </strong>
                </div>
            </div>
            <div className={uiHeader.meta}>
                <span className={uiHeader.status}/> Sandbox{" "}
                <span className="text-subtle">/</span> {componentNames.length}{" "}
                componentes
            </div>
        </header>
    );
}
