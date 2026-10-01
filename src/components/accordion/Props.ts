export const accordionProps = [
    { name: "tabs", type: "{ header, content, disabled?, className? }[]", description: "Abas do accordion: cabeçalho, conteúdo, estado desabilitado e classe." },
    { name: "activeIndex / onChange", type: "number | number[] | null / função", description: "Índice(s) da(s) aba(s) aberta(s). Com onChange, o valor é controlado por quem usa o componente." },
    { name: "multiple", type: "boolean", description: "Permite abrir várias abas ao mesmo tempo; activeIndex passa a ser uma lista." },
    { name: "iconExpand / iconCollapse", type: "ReactNode", description: "Ícones personalizados do cabeçalho (mapeamento da 2.x preservado)." },
    { name: "size / className / css / id", type: "SizeProps / string / CSSProperties / string", description: "Propriedades compartilhadas de layout e identificação." },
] as const;
