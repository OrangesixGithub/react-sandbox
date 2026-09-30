export const textareaProps = [
    { name: "mode / control", type: "Controlled | HookForm", description: "Modo de controle do valor e objeto do React Hook Form." },
    { name: "sizes", type: "small | large", description: "Tamanho visual do campo; sem valor usa o tamanho normal." },
    { name: "rows", type: "number", description: "Quantidade de linhas visíveis do campo." },
    { name: "autoResize", type: "boolean", description: "Ajusta a altura do campo ao conteúdo e desativa o redimensionamento manual." },
    { name: "error", type: "string", description: "Mensagem de erro exibida abaixo do campo e estilo inválido." },
    { name: "value / onChange / onBlur", type: "valor / função", description: "Valor e callbacks do modo Controlled." },
    { name: "required / disabled / readonly", type: "boolean", description: "Estados do campo." },
] as const;
