import { useEffect, useState } from "react";
import { uiPreview } from "./style/ui-preview";
import { ComponentPreview } from "./ComponentPreview";
import type { PanelPreviewPayload } from "../@types/panel";

/**
 * Módulo (Sandbox) - Renderização isolada no iframe
 */
export function IframePreview() {
    const [preview, setPreview] = useState<PanelPreviewPayload | null>(null);

    useEffect(() => {
        function receivePreview(event: MessageEvent) {
            if (event.source !== window.parent || event.origin !== window.location.origin || event.data?.type !== "sandbox-preview") {
                return;
            }
            setPreview(event.data.payload as PanelPreviewPayload);
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
        <div className={`${uiPreview.frameCanvas} ${preview?.theme === "light" ? "bg-white text-slate-900" : "dark bg-preview text-copy"}`}>
            {preview && <ComponentPreview
                apiDemo={preview.apiDemo}
                boxDemo={preview.boxDemo}
                buttonDemo={preview.buttonDemo}
                inputDemo={preview.inputDemo}
                selected={preview.selected}/>}
        </div>
    );
}
