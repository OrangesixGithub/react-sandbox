export const inputProps = [
    { name: "mode / control", type: "Controlled | HookForm", description: "Modo de controle do valor e objeto do React Hook Form." },
    { name: "type", type: "text | email | number | password | date | time", description: "Tipo de campo. CPF e CNPJ usam mask com type text." },
    { name: "sizes", type: "small | large", description: "Tamanho visual do campo; sem valor usa o tamanho normal." },
    { name: "error", type: "string", description: "Mensagem de erro exibida abaixo do campo e estilo inválido." },
    { name: "value / onChange / onBlur", type: "valor / função", description: "Valor e callbacks do modo Controlled." },
    { name: "mask / maskAutoClear", type: "string / boolean", description: "Máscara personalizada ou cpf/cnpj; limpa valores incompletos ao sair." },
    { name: "number*", type: "número / string", description: "Moeda, limites, casas decimais, prefixo e sufixo." },
    { name: "password*", type: "boolean / template", description: "Visibilidade, feedback e templates de senha." },
    { name: "required / disabled / readonly", type: "boolean", description: "Estados do campo." },
] as const;
