import { useState } from "react";
import { Button } from "@orangesix/react/button";
import { Message } from "@orangesix/react/message";
import { Legend } from "../../core/Legend.tsx";
import { Box } from "@orangesix/react/box";

/**
 * Módulo (Sandbox) - Confirmação modal
 */
export function MessageStage() {
    const [visible, setVisible] = useState(false);
    const [action, setAction] = useState("");

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
            <Message
                appendTo={window.parent === window ? "self" : () => window.parent.document.body}
                message="Deseja <strong>confirmar</strong> esta operação?"
                visible={visible}
                onConfirm={() => {
                    setAction("Confirmado");
                    setVisible(false);
                }}
                onVisible={setVisible}/>
            <Legend
                origin="state"
                value={action || "Nenhuma"}/>
        </Box>
    );
}

MessageStage.displayName = "MessageStage";
