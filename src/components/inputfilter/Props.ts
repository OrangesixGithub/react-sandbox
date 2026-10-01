export const inputfilterProps = [
    { name: "type", type: "text | number | date | autocomplete", description: "Tipo do filtro; sem valor usa `text`." },
    { name: "options", type: "string[]", description: "Operadores disponíveis (`=`, `!=`, `<`, `>`, `<=`, `>=`, `{}`, `%`, `!%`), conforme o tipo." },
    { name: "value / onChange", type: "string | null", description: "Valor com o operador no final (ex.: `abc%`); `onChange` devolve `null` quando o filtro está vazio." },
    { name: "data / onSearch", type: "{ id, label }[] / função", description: "Sugestões e busca do tipo `autocomplete`." },
    { name: "autocompleteSelectLimit", type: "number", description: "Quantidade máxima de itens selecionados no tipo `autocomplete`." },
    { name: "autocompleteScrollHeight", type: "string", description: "Altura da caixa de sugestões do tipo `autocomplete`." },
    { name: "error", type: "string", description: "Mensagem de erro exibida abaixo do campo e estilo inválido." },
    { name: "required / disabled / readonly", type: "boolean", description: "Estados do campo." },
] as const;
