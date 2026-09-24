import { Box } from "@orangesix/react/box";
import type { BoxDemoState } from "./state";

type BoxPreviewProps = {
    boxDemo: BoxDemoState;
};

/**
 * Módulo (Sandbox) - Demonstração de largura e alinhamento do Box
 */
export function BoxPreview(props: BoxPreviewProps) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className="w-full rounded-xl text-copy">
            <p className="mb-1 text-xs text-muted">Área de referência: 100% da largura</p>
            <Box
                align={props.boxDemo.align}
                className="gap-2 rounded-lg border border-accent bg-accent/10 p-3"
                direction={props.boxDemo.direction}
                justify={props.boxDemo.justify}>
                {["A", "B", "C"].map((item) => (
                    <span
                        className="grid h-10 w-10 place-items-center rounded-md bg-accent font-bold text-white"
                        key={item}>{item}</span>
                ))}
            </Box>
            <p className="mb-1 text-xs text-muted mt-3">Área de referência: 50% da largura</p>
            <Box
                align={props.boxDemo.align}
                className="gap-2 rounded-lg border border-accent bg-accent/10 p-3"
                direction={props.boxDemo.direction}
                justify={props.boxDemo.justify}
                size={{ lg: "50" }}>
                {["A", "B", "C"].map((item) => (
                    <span
                        className="grid h-10 w-10 place-items-center rounded-md bg-accent font-bold text-white"
                        key={item}>{item}</span>
                ))}
            </Box>
            <p className="mb-1 text-xs text-muted mt-3">Área de referência:
                <span className="text-accent ms-1.5">Personalizado w-[37%]!</span></p>
            <Box
                align={props.boxDemo.align}
                className="gap-2 rounded-lg border border-accent bg-accent/10 p-3 lg:w-[37%]! "
                direction={props.boxDemo.direction}
                justify={props.boxDemo.justify}>
                {["A", "B", "C"].map((item) => (
                    <span
                        className="grid h-10 w-10 place-items-center rounded-md bg-accent font-bold text-white"
                        key={item}>{item}</span>
                ))}
            </Box>
            <p className="mb-1 mt-3 text-xs text-muted">Responsivo: 100% → 50% em md → 25% em lg · elemento {props.boxDemo.element}</p>
            <Box
                align={props.boxDemo.align}
                aria-label="Exemplo de Box responsivo"
                as={props.boxDemo.element}
                className="gap-2 rounded-lg border border-accent bg-accent/10 p-3"
                direction={props.boxDemo.direction}
                justify={props.boxDemo.justify}
                size={{ base: "100", md: "50", lg: "25" }}>
                {["A", "B", "C"].map((item) => (
                    <span
                        className="grid h-10 w-10 place-items-center rounded-md bg-accent font-bold text-white"
                        key={item}>{item}</span>
                ))}
            </Box>
        </div>
    );
}
