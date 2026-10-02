import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@orangesix/react/button";
import { Loading } from "@orangesix/react/loading";

const box = "relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg border border-neutral-300 " +
    "text-sm text-neutral-500 dark:border-neutral-700";

const types = ["border", "grow", "bars", "pulse", "orbit"] as const;

/**
 * Módulo (Sandbox) - Loading com os indicadores padrão, centro personalizado e tela cheia
 */
export function LoadingStage() {
    const [visible, setVisible] = useState(true);
    const [fullscreen, setFullscreen] = useState(false);

    function showFullscreen() {
        setFullscreen(true);
        setTimeout(() => setFullscreen(false), 2000);
    }

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <section className="mb-10 flex w-full flex-col gap-6">
            <div className="flex gap-2">
                <Button
                    label={visible ? "Ocultar" : "Exibir"}
                    onClick={() => setVisible(!visible)}/>
                <Button
                    color="secondary"
                    label="Tela cheia (2s)"
                    onClick={showFullscreen}/>
            </div>
            <div className="grid grid-cols-3 gap-2">
                {types.map(type => (
                    <div
                        className={box}
                        key={type}>
                        Conteúdo do contêiner
                        <Loading
                            text={type}
                            type={type}
                            visible={visible}/>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-2">
                <div className={box}>
                    Conteúdo do contêiner
                    <Loading
                        opacity="0.3"
                        visible={visible}>
                        <motion.div
                            animate={{ rotate: [0, 180, 360], scale: [1, 0.7, 1], borderRadius: ["20%", "50%", "20%"] }}
                            className="size-10 bg-current"
                            transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity }}/>
                    </Loading>
                </div>
            </div>
            <Loading
                fullscreen
                text="Tela cheia"
                visible={fullscreen}
                zindex={50}/>
        </section>
    );
}

LoadingStage.displayName = "LoadingStage";
