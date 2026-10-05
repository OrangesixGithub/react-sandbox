import { Title } from "./Title";
import { uiPreview } from "./style/ui-preview";
import { uiSections } from "./style/ui-sections";
import { components } from "../../components.ts";
import { useEffect, useRef, useState } from "react";
import { ComponentPreview } from "./ComponentPreview";
import type { PanelContentProps, PreviewTheme } from "../@types/panel";

/**
 * Módulo (Sandbox) - Prévia do componente
 */
export function Preview(props: PanelContentProps) {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [theme, setTheme] = useState<PreviewTheme>("dark");
    const showIframe = components[props.selected].iframe;

    function sendPreview() {
        if (!showIframe) {
            return;
        }
        iframeRef.current?.contentWindow?.postMessage({
            type: "sandbox-preview",
            payload: { selected: props.selected, theme },
        }, window.location.origin);
    }

    useEffect(() => {
        if (!showIframe) {
            return;
        }

        function receiveReady(event: MessageEvent) {
            if (event.source === iframeRef.current?.contentWindow && event.origin === window.location.origin && event.data?.type === "sandbox-preview-ready") {
                sendPreview();
            }
        }

        window.addEventListener("message", receiveReady);
        sendPreview();
        return () => window.removeEventListener("message", receiveReady);
    }, [
        props.selected,
        showIframe,
        theme
    ]);

    // A snackbar do utils é inserida no <body>, fora do canvas: replica nele o tema da prévia
    useEffect(() => {
        document.body.dataset.theme = theme;
        return () => {
            delete document.body.dataset.theme;
        };
    }, [theme]);

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <section
            aria-labelledby="preview-title"
            className={uiSections.section}>
            <Title
                aside="Canvas do componente"
                category="VISUALIZAÇÃO"
                id="preview-title"
                index="01"
                title="Prévia"/>
            <div className={uiPreview.grid}>
                <div className={uiPreview.shell}>
                    <div className={uiPreview.toolbar}>
                        <div className="flex items-center gap-3">
                            <span className="flex items-center gap-2"><span className={uiPreview.liveDot}/> PRÉVIA NORMAL</span>
                            <button
                                aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
                                aria-pressed={theme === "dark"}
                                className="rounded-md p-1 text-muted hover:bg-white/10 hover:text-copy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                                title={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
                                type="button"
                                onClick={() => setTheme(current => current === "dark" ? "light" : "dark")}>
                                <i
                                    aria-hidden="true"
                                    className={theme === "dark" ? "pi pi-sun" : "pi pi-moon"}/>
                            </button>
                        </div>
                        <span>React</span>
                    </div>
                    <div
                        data-preview-overlay-host
                        className={`${uiPreview.canvas} ${theme === "dark" ? "dark bg-preview text-copy" : "bg-white text-slate-900"}`}>
                        <ComponentPreview selected={props.selected}/>
                    </div>
                </div>
                {showIframe && <div className={uiPreview.frameShell}>
                    <div className={uiPreview.toolbar}>
                        <span className="flex items-center gap-2"><span className={uiPreview.liveDot}/> PRÉVIA NO IFRAME</span>
                        <span>Documento isolado</span>
                    </div>
                    <iframe
                        className={uiPreview.iframe}
                        ref={iframeRef}
                        src="?preview=iframe"
                        title="Prévia do componente dentro de um iframe"
                        onLoad={sendPreview}/>
                </div>}
            </div>
        </section>
    );
}
