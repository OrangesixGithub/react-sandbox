import { Box } from "@orangesix/react/box";
/**
 * Módulo (Sandbox) - Demonstração de largura e alinhamento do Box
 */
export function BoxStage() {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <div className="w-full rounded-xl text-slate-700 dark:text-copy">
            <p className="mb-1 text-xs text-slate-500 dark:text-muted">Área de referência: 100% da largura</p>
            <Box
                align="items-center"
                className="gap-2 rounded-lg border border-accent bg-accent/10 p-3"
                direction="row"
                justify="justify-between">
                {["A", "B", "C"].map((item) => (
                    <span
                        className="grid h-10 w-10 place-items-center rounded-md bg-accent font-bold text-white"
                        key={item}>{item}</span>
                ))}
            </Box>
            <p className="mb-1 text-xs text-slate-500 mt-3 dark:text-muted">Área de referência: 50% da largura</p>
            <Box
                align="items-center"
                className="gap-2 rounded-lg border border-accent bg-accent/10 p-3"
                direction="row"
                justify="justify-between"
                size={{ lg: "50" }}>
                {["A", "B", "C"].map((item) => (
                    <span
                        className="grid h-10 w-10 place-items-center rounded-md bg-accent font-bold text-white"
                        key={item}>{item}</span>
                ))}
            </Box>
            <p className="mb-1 text-xs text-slate-500 mt-3 dark:text-muted">Área de referência:
                <span className="text-accent ms-1.5">Personalizado w-[37%]!</span></p>
            <Box
                align="items-center"
                className="gap-2 rounded-lg border border-accent bg-accent/10 p-3 lg:w-[37%]! "
                direction="row"
                justify="justify-between">
                {["A", "B", "C"].map((item) => (
                    <span
                        className="grid h-10 w-10 place-items-center rounded-md bg-accent font-bold text-white"
                        key={item}>{item}</span>
                ))}
            </Box>
            <p className="mb-1 mt-3 text-xs text-slate-500 dark:text-muted">Responsivo: 100% → 50% em md → 25% em lg · elemento section</p>
            <Box
                align="items-center"
                aria-label="Exemplo de Box responsivo"
                className="gap-2 rounded-lg border border-accent bg-accent/10 p-3"
                direction="row"
                justify="justify-between"
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
