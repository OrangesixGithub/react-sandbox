export const checkboxProps = [
    { name: "mode / control", type: "Controlled | HookForm", description: "Modo de controle e objeto do React Hook Form." },
    { name: "options", type: "CheckboxOptionsProps[]", description: "Opções com value (string ou number), label e disabled opcional." },
    { name: "value / onChange / onBlur", type: "(string | number)[] / função", description: "Lista de valores; ex.: [1, 2, 3] marca as opções com esses valores. Os callbacks recebem a nova lista." },
    { name: "align", type: "row | column", description: "Direção das opções; padrão horizontal." },
    { name: "sizes", type: "small | large", description: "Tamanho visual da caixa e do texto; sem valor usa o tamanho normal." },
    { name: "required / disabled / readonly", type: "boolean", description: "Obrigatório exige ao menos uma opção marcada; os demais impedem alterações." },
    { name: "readonlyType / readonlyClassName", type: "label | field / string", description: "No Controlled, permite exibir as opções marcadas como texto." },
    { name: "error", type: "string", description: "Mensagem de erro; HookForm também usa a validação do formulário." },
    { name: "id / name / label / size", type: "string / percentual", description: "Identificação do grupo, rótulo e largura responsiva." },
    { name: "showLabel", type: "boolean", description: "Exibe o rótulo do campo (padrão true). false oculta visualmente label, ícone e asterisco sem reservar espaço, mantendo o label acessível." },
] as const;
