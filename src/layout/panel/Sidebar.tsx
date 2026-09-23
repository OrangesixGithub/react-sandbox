import { clsx } from "clsx";
import { useState } from "react";
import { uiSidebar } from "./style/ui-sidebar";
import { PanelSidebarProps } from "../@types/panel";
import { componentNames } from "../../catalog/components";

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
            <div className={styles.intro()}>
                <span className={styles.eyebrow()}>CATÁLOGO</span>
                <h2 className={styles.heading()}>Componentes</h2>
                <p className={styles.description()}>
                    Explore a biblioteca por componente.
                </p>
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
                            <span>{name}</span>
                            <i
                                aria-hidden="true"
                                className={clsx(styles.arrow(), props.selected === name ? "text-accent" : "text-subtle")}/>
                        </button>
                    ))
                ) : <p className={styles.empty()}>Nenhum componente encontrado.</p>}
            </nav>
        </aside>
    );
}
