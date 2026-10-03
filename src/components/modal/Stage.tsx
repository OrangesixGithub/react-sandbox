import { useState } from "react";
import { Box } from "@orangesix/react/box";
import { Modal } from "@orangesix/react/modal";
import { Button } from "@orangesix/react/button";

/**
 * Módulo (Sandbox) - Janela modal
 */
export function ModalStage() {
    const [visible, setVisible] = useState(false);

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <Box
            as="section"
            className="gap-2"
            direction="column">
            <Button
                icon="gear"
                label="Abrir"
                onClick={() => setVisible(true)}/>
            <Modal
                maximizable
                appendTo={window.parent === window ? "self" : () => window.parent.document.body}
                header="Janela modal"
                icon="window"
                sizes="medium"
                transition="zoom"
                visible={visible}
                onVisible={setVisible}>
                <p className="text-text p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, fugit natus numquam praesentium recusandae reiciendis soluta totam. Accusamus distinctio et incidunt nobis quas repellat, tenetur ullam velit. Dolorum, fugiat, tempore.</p>
            </Modal>
        </Box>
    );
}

ModalStage.displayName = "ModalStage";
