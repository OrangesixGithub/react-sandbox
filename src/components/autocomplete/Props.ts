export const autocompleteProps = [
    { name: "mode / control", type: "Controlled | HookForm", description: "Modo de controle; padrão Controlled." },
    { name: "data / dataTemplate", type: "AutocompleteDataProps[] / função", description: "Sugestões com id e name; code está deprecated e continua aceito. Template opcional." },
    { name: "value / onChange / onSelect", type: "any / função", description: "Preserva o objeto selecionado ou texto digitado nos callbacks." },
    { name: "onSearch", type: "função", description: "Recebe a consulta para atualizar as sugestões." },
    { name: "searchDelay / searchMin / searchMax", type: "number", description: "Atraso (500 ms), mínimo (1) e máximo de caracteres." },
    { name: "forceSelect", type: "boolean", description: "Exige uma sugestão válida; padrão true." },
    { name: "appendTo", type: "self | HTMLElement", description: "Destino do painel; padrão self." },
    { name: "required / disabled / readonly / error", type: "boolean / string", description: "Obrigatoriedade, bloqueio de edição e feedback." },
    { name: "size / css / className", type: "ApiSizeProps / objeto / string", description: "Largura responsiva e personalização do Box." },
    { name: "showLabel", type: "boolean", description: "Exibe o rótulo do campo (padrão true). false oculta visualmente label, ícone e asterisco sem reservar espaço, mantendo o label acessível." },
] as const;
