import { uiControlField, uiControls } from "../../styles/ui-controls";

export function ControlsPanel() {
  return (
    <aside
      className={uiControls.root}
      aria-label="Painel de controles"
    >
      <div className={uiControls.inner}>
        <span className={uiControls.eyebrow}>PLAYGROUND</span>
        <h2 className={uiControls.heading}>
          Controles
        </h2>
        <p className="text-xs leading-relaxed text-muted">
          Ajustes para testar as props da prévia.
        </p>
        <div className={uiControls.skeletonGrid}>
          {[0, 1, 2, 3].map((index) => (
            <div className="grid gap-2" key={index}>
              <span className={uiControls.skeletonBar} />
              <span
                className={uiControlField({ type: index === 3 ? "switch" : "input" })}
              />
            </div>
          ))}
        </div>
        <div className={uiControls.note}>
          <i className={uiControls.noteIcon} aria-hidden="true" />
          <p className="text-[11px] leading-normal text-muted">
            Os controles específicos de cada componente serão definidos junto
            com as prévias.
          </p>
        </div>
      </div>
    </aside>
  );
}
