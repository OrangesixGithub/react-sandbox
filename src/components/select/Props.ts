export const selectProps = [
    { name: "mode / control", type: "Controlled | HookForm", description: "Modo de controle do valor e objeto do React Hook Form." },
    { name: "options", type: "SelectOptionsProps[]", description: "Opções com id, name e disabled opcional." },
    { name: "value / onChange / onBlur", type: "valor / função", description: "Valor selecionado; callbacks recebem o ID convertido em string." },
    { name: "init", type: "boolean | string", description: "Inclui opção vazia com legenda automática ou personalizada." },
    { name: "sizes / size", type: "small | large / percentual", description: "Tamanho visual e largura responsiva do Box." },
    { name: "required / disabled / readonly", type: "boolean", description: "Obrigatoriedade e estados que impedem alterações." },
    { name: "readonlyType / readonlyClassName", type: "label | field / string", description: "No modo Controlled, exibe o nome da opção como texto ou campo." },
    { name: "error", type: "string", description: "Mensagem de erro; no HookForm também exibe erros de validação." },
    { name: "ref", type: "Ref<HTMLSelectElement>", description: "Referência ao select nativo para envio do formulário." },
] as const;
