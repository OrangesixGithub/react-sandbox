export const switchProps = [
    { name: "mode / control", type: "Controlled | HookForm", description: "Modo de controle e objeto do React Hook Form." },
    { name: "value / onChange / onBlur", type: "boolean | string / função", description: "Valor atual; callbacks recebem o valor configurado para cada estado." },
    { name: "valueTrue / valueFalse", type: "string", description: "Valores personalizados; sem configuração utiliza true e false." },
    { name: "legend", type: "string", description: "Legenda clicável exibida ao lado do controle." },
    { name: "sizes / size", type: "small | large / percentual", description: "Tamanho visual e largura responsiva do Box." },
    { name: "required / disabled / readonly", type: "boolean", description: "Obrigatoriedade e estados que impedem alterações; required exige ativação." },
    { name: "readonlyType / readonlyClassName", type: "label | field / string", description: "No Controlled, permite exibir o valor como texto." },
    { name: "error", type: "string", description: "Mensagem de erro; HookForm também exibe erros de validação." },
    { name: "id / name / label", type: "string", description: "Identificação do controle, nome do campo e rótulo." },
    { name: "showLabel", type: "boolean", description: "Exibe o rótulo do campo (padrão true). false oculta visualmente label, ícone e asterisco sem reservar espaço, mantendo o label acessível." },
] as const;
