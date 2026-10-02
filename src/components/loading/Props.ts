export const loadingProps = [
    { name: "visible", type: "boolean", description: "Define se o loading é exibido." },
    { name: "type", type: "\"border\" | \"grow\" | \"bars\" | \"pulse\" | \"orbit\"", description: "Indicador padrão: anel (border), pontos (grow), barras (bars), onda (pulse) ou anéis opostos (orbit). Ignorado quando há children." },
    { name: "children", type: "ReactNode", description: "Conteúdo personalizado no centro do loading, como uma animação feita com motion." },
    { name: "text", type: "string", description: "Mensagem exibida abaixo do indicador." },
    { name: "color", type: "ColorProps", description: "Cor do indicador e da mensagem. Padrão: white." },
    { name: "opacity", type: "string", description: "Opacidade do fundo escuro. Padrão: 0.5." },
    { name: "fullscreen", type: "boolean", description: "Cobre toda a tela em vez de apenas o contêiner pai." },
    { name: "zindex", type: "number", description: "Valor de z-index do loading. Padrão: 1." },
    { name: "align / justify", type: "classes Tailwind", description: "Alinhamento do conteúdo (items-* e justify-*). Padrão: centralizado." },
    { name: "className / css", type: "string / CSSProperties", description: "Propriedades compartilhadas de estilo." },
] as const;
