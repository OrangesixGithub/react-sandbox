import { Title } from "./Title";
import { useEffect, useRef } from "react";
import { uiPreview } from "./style/ui-preview";
import { uiSections } from "./style/ui-sections";
import { ComponentPreview } from "./ComponentPreview";
import type { PanelContentProps } from "../@types/panel";

/**
 * Módulo (Sandbox) - Prévia do componente
 */
export function Preview(props: PanelContentProps) {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    function sendPreview() {
        iframeRef.current?.contentWindow?.postMessage({
            type: "sandbox-preview",
            payload: { apiDemo: props.apiDemo, selected: props.selected },
        }, window.location.origin);
    }

    useEffect(() => {
        function receiveReady(event: MessageEvent) {
            if (event.source === iframeRef.current?.contentWindow && event.origin === window.location.origin && event.data?.type === "sandbox-preview-ready") {
                sendPreview();
            }
        }

        window.addEventListener("message", receiveReady);
        sendPreview();
        return () => window.removeEventListener("message", receiveReady);
    }, [props.apiDemo, props.selected]);

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <section aria-labelledby="preview-title"
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
                        <span className="flex items-center gap-2"><span className={uiPreview.liveDot}/> PRÉVIA NORMAL</span>
                        <span>React</span>
                    </div>
                    <div className={uiPreview.canvas}>
                        <ComponentPreview
                            apiDemo={props.apiDemo}
                            selected={props.selected}/>
                    </div>
                </div>
                <div className={uiPreview.shell}>
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
                </div>
            </div>
        </section>
    );
}
