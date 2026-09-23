import { uiHeader } from "../../styles/ui-header";
import { componentNames } from "../../catalog/components";

export function Header() {
  return (
    <header className={uiHeader.root}>
      <div className="flex items-center gap-3">
        <img
          className="h-12 w-12 object-contain"
          src="/orange.png"
          alt="Logo"
        />
        <div>
          <span className={uiHeader.eyebrow}>OrangeSix / REACT</span>
          <strong className={uiHeader.title}>
            Loboratório de components UI
          </strong>
        </div>
      </div>
      <div className={uiHeader.meta}>
        <span className={uiHeader.status} /> Sandbox{" "}
        <span className="text-subtle">/</span> {componentNames.length}{" "}
        componentes
      </div>
    </header>
  );
}
