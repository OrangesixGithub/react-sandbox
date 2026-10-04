export const radioProps = [
    { name: "mode / control", type: "Controlled | HookForm", description: "Modo de controle e objeto do React Hook Form." },
    { name: "options", type: "RadioOptionsProps[]", description: "Opções com value, label e disabled opcional." },
    { name: "value / onChange / onBlur", type: "string / função", description: "Valor selecionado; callbacks recebem o valor da opção." },
    { name: "align", type: "row | column", description: "Direção das opções; padrão horizontal." },
    { name: "sizes", type: "small | large", description: "Tamanho visual do radio e do texto; sem valor usa o tamanho normal." },
    { name: "required / disabled / readonly", type: "boolean", description: "Obrigatoriedade e estados que impedem alterações." },
    { name: "readonlyType / readonlyClassName", type: "label | field / string", description: "No Controlled, permite exibir a seleção como texto." },
    { name: "error", type: "string", description: "Mensagem de erro; HookForm também usa a validação do formulário." },
    { name: "id / name / label / size", type: "string / percentual", description: "Identificação do grupo, rótulo e largura responsiva." },
    { name: "showLabel", type: "boolean", description: "Exibe o rótulo do campo (padrão true). false oculta visualmente label, ícone e asterisco sem reservar espaço, mantendo o label acessível." },
] as const;
