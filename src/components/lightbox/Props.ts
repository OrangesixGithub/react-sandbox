export const lightboxProps = [
    { name: "appendTo", type: "HTMLElement | 'self' | (() => HTMLElement | null)", description: "Destino do overlay. Sem valor, usa o body do host ancestral ou local. Outra janela exige initializeLightbox() nela." },
    { name: "html", type: "string", description: "HTML confiável com as imagens da galeria. Preserve a sanitização na origem do conteúdo." },
    { name: "containerClassName", type: "string", description: "Classes adicionais do contêiner do HTML." },
    { name: "size / className / css / id", type: "SizeProps / string / CSSProperties / string", description: "Layout e identificação do Box externo." },
] as const;
