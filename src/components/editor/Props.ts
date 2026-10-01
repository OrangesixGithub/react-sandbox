export const editorProps = [
    { name: "value / onChange / onBlur", type: "string / função", description: "Conteúdo HTML e callbacks que recebem o HTML atual." },
    { name: "options", type: "basic | full | EditorOptionsProps", description: "Barra básica, completa (inclui tabelas e alinhamento) ou personalizada com table e align opcionais." },
    { name: "height", type: "number", description: "Altura mínima da área editável em pixels; padrão 100." },
    { name: "required / disabled / readonly", type: "boolean", description: "Obrigatoriedade e bloqueio da edição. A barra fica oculta quando bloqueado." },
    { name: "error", type: "string", description: "Mensagem de validação informada pelo consumidor." },
    { name: "icon / iconPrefix", type: "string", description: "Ícone do rótulo e prefixo da barra: bi bi- por padrão ou pi pi-." },
    { name: "ref", type: "Ref<HTMLDivElement>", description: "Referência à área editável para foco." },
    { name: "size / css / className", type: "ApiSizeProps / objeto / string", description: "Largura responsiva e personalização do Box." },
] as const;
