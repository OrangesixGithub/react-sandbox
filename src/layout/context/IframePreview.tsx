import { useEffect, useState } from "react";
import { uiPreview } from "./style/ui-preview";
import { ComponentPreview } from "./ComponentPreview";
import type { PanelContentProps } from "../@types/panel";

/**
 * Módulo (Sandbox) - Renderização isolada no iframe
 */
export function IframePreview() {
    const [preview, setPreview] = useState<PanelContentProps | null>(null);

    useEffect(() => {
        function receivePreview(event: MessageEvent) {
            if (event.source !== window.parent || event.origin !== window.location.origin || event.data?.type !== "sandbox-preview") {
                return;
            }
            setPreview(event.data.payload as PanelContentProps);
        }

        window.addEventListener("message", receivePreview);
        window.parent.postMessage({ type: "sandbox-preview-ready" }, window.location.origin);
        return () => window.removeEventListener("message", receivePreview);
    }, []);

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className={uiPreview.frameCanvas}>
            {preview && <ComponentPreview
                apiDemo={preview.apiDemo}
                boxDemo={preview.boxDemo}
                selected={preview.selected}/>}
        </div>
    );
}
