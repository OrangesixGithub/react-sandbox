export const pdfProps = [
    { name: "appendTo", type: "HTMLElement | 'self' | (() => HTMLElement | null)", description: "Destino da paginação. Padrão self (sticky local). Um elemento usa barra fixa no viewport de destino, alinhada à área visível do PDF. Janela ancestral exige mesma origem e CSS da biblioteca." },
    { name: "file", type: "string", description: "URL, caminho ou data URI do PDF. Ao trocar o arquivo, a navegação reinicia na primeira página. URLs externas precisam permitir CORS." },
    { name: "mode", type: "'total' | 'pagination'", description: "Todas as páginas (total, padrão) ou uma página por vez com navegação acessível por teclado." },
    { name: "size / className / css / id", type: "SizeProps / string / CSSProperties / string", description: "Layout e identificação do Box externo. A largura das páginas acompanha o contêiner." },
] as const;
