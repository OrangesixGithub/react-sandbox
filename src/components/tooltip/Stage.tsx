import { useState } from "react";
import { Box } from "@orangesix/react/box";
import { Modal } from "@orangesix/react/modal";
import { Button } from "@orangesix/react/button";
import { Select } from "@orangesix/react/select";
import { Tooltip } from "@orangesix/react/tooltip";
import type { TooltipTransition } from "@orangesix/react/tooltip";

/**
 * Módulo (Sandbox) - Tooltip com texto e conteúdo React
 */
export function TooltipStage() {
    const [visible, setVisible] = useState(false);
    const [transition, setTransition] = useState<TooltipTransition>("zoom");

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <Box
            align="items-start"
            as="section"
            className="mb-10 gap-6"
            direction="column">
            <Select
                options={[
                    { id: "zoom", name: "Zoom" },
                    { id: "fade", name: "Fade" },
                    { id: "slide", name: "Slide" },
                ]}
                label="Transição"
                name="tooltip-transition"
                size="25"
                value={transition}
                onChange={value => setTransition(value as TooltipTransition)}/>
            <Tooltip
                content="Informação complementar ao passar o mouse."
                transition={transition}>
                <Button label="Passe o mouse"/>
            </Tooltip>
            <Button
                label="Abrir modal"
                onClick={() => setVisible(true)}/>
            <Modal
                draggable
                maximizable
                appendTo={window.parent === window ? "self" : () => window.parent.document.body}
                header="Tooltip dentro da modal"
                sizes="medium"
                visible={visible}
                onVisible={setVisible}>
                <Box
                    align="items-start"
                    direction="column">
                    <p className="text-text">Passe o mouse ou use Tab no botão para exibir o tooltip.</p>
                    <Tooltip
                        content="Informação complementar dentro da modal."
                        transition={transition}>
                        <Button label="Tooltip na modal"/>
                    </Tooltip>
                </Box>
            </Modal>
        </Box>
    );
}

TooltipStage.displayName = "TooltipStage";
