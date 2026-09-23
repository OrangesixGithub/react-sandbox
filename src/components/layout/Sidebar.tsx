import { clsx } from "clsx";
import { useState } from "react";
import { uiSidebar } from "../../styles/ui-sidebar";
import { componentNames, type ComponentName } from "../../catalog/components";

type SidebarProps = {
  selected: ComponentName;
  onSelect: (name: ComponentName) => void;
};

export function Sidebar({ selected, onSelect }: SidebarProps) {
  const styles = uiSidebar();
  const [query, setQuery] = useState("");
  const visibleComponents = componentNames.filter((name) =>
    name.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <aside className={styles.root()} aria-label="Navegação de componentes">
      <div className={styles.intro()}>
        <span className={styles.eyebrow()}>CATÁLOGO</span>
        <h2 className={styles.heading()}>Componentes</h2>
        <p className={styles.description()}>
          Explore a biblioteca por componente.
        </p>
      </div>
      <label className={styles.search()}>
        <i className={styles.searchIcon()} aria-hidden="true" />
        <input
          className={styles.input()}
          aria-label="Buscar componente"
          placeholder="Buscar componente"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      <nav className={styles.nav()} aria-label="Componentes">
        {visibleComponents.length > 0 ? (
          visibleComponents.map((name) => (
            <button
              key={name}
              type="button"
              aria-current={selected === name ? "page" : undefined}
              className={uiSidebar({ selected: selected === name }).item()}
              onClick={() => onSelect(name)}
            >
              <span>{name}</span>
              <i
                className={clsx(
                  styles.arrow(),
                  selected === name ? "text-accent" : "text-subtle",
                )}
                aria-hidden="true"
              />
            </button>
          ))
        ) : (
          <p className={styles.empty()}>Nenhum componente encontrado.</p>
        )}
      </nav>
    </aside>
  );
}
