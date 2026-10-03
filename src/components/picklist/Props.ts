export const picklistProps = [
    { name: "data", type: "{ id, label, active? }[]", description: "Itens manipulados pelo componente; os ativos ficam na lista de destino." },
    { name: "onChange", type: "função", description: "Recebe todos os itens após a movimentação, com active atualizado (origem false, destino true)." },
    { name: "dataKey", type: "string", description: "Chave que identifica cada item. Padrão: id." },
    { name: "sourceHeader / targetHeader", type: "ReactNode", description: "Cabeçalhos das listas de origem e de destino." },
    { name: "filter / filterBy", type: "boolean / string", description: "Exibe a busca nas duas listas e define o campo pesquisado. Padrão: label." },
    { name: "disabled", type: "boolean", description: "Impede a seleção e a movimentação dos itens." },
    { name: "iconPrefix", type: "\"bi bi-\" | \"pi pi-\"", description: "Prefixo dos ícones dos botões e da busca. Padrão: bi bi-." },
    { name: "size / className / css / id", type: "SizeProps / string / CSSProperties / string", description: "Propriedades compartilhadas de layout e identificação." },
] as const;
