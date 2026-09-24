import { clsx } from "clsx";
import { useState } from "react";
import logo from "@assets/orange.png";
import { uiSidebar } from "./style/ui-sidebar";
import { PanelSidebarProps } from "../@types/panel";
import { components, componentNames } from "../../components.ts";

/**
 * Módulo (Sandbox) - Navegação de componentes
 */
export function Sidebar(props: PanelSidebarProps) {
    const styles = uiSidebar();
    const [query, setQuery] = useState("");
    const visibleComponents = componentNames.filter((name) =>
        name.toLowerCase().includes(query.trim().toLowerCase()),
    );

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <aside
            aria-label="Navegação de componentes"
            className={styles.root()}>
            <div className={styles.brand()}>
                <img
                    alt=""
                    className={styles.logo()}
                    src={logo}/>
                <span className={styles.brandName()}>OrangeSix<span className="text-accent">.</span></span>
            </div>
            <div className={styles.intro()}>
                <span className={styles.eyebrow()}>BIBLIOTECA</span>
                <h2 className={styles.heading()}>
                    <i
                        aria-hidden="true"
                        className={styles.headingIcon()}/>
                    Componentes
                </h2>
            </div>
            <label className={styles.search()}>
                <i
                    aria-hidden="true"
                    className={styles.searchIcon()}/>
                <input
                    aria-label="Buscar componente"
                    className={styles.input()}
                    placeholder="Buscar componente"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}/>
            </label>
            <nav
                aria-label="Componentes"
                className={styles.nav()}>
                {visibleComponents.length > 0 ? (
                    visibleComponents.map((name) => (
                        <button
                            aria-current={props.selected === name ? "page" : undefined}
                            className={uiSidebar({ selected: props.selected === name }).item()}
                            key={name}
                            type="button"
                            onClick={() => props.onSelect(name)}>
                            <span className={styles.itemLabel()}>
                                <i
                                    aria-hidden="true"
                                    className={clsx(styles.itemIcon(), components[name].icon)}/>
                                {name}
                            </span>
                        </button>
                    ))
                ) : <p className={styles.empty()}>Nenhum componente encontrado.</p>}
            </nav>
            <div className={styles.footer()}>
                <span className={styles.footerIcon()}><i
                    aria-hidden="true"
                    className="bi bi-code-square"/></span>
                <span><strong className="block text-xs text-copy">Sandbox</strong><span>Ambiente de desenvolvimento</span></span>
            </div>
        </aside>
    );
}
