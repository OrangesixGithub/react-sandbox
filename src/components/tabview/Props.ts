export const tabviewProps = [
    { name: "tabs", type: "{ tab, content, icon?, iconPrefix?, iconPosition?, disabled?, closed?, visible?, headerTemplate?, id? }[]", description: "Abas: título, conteúdo, ícone, estados, opção de fechar e template do cabeçalho." },
    { name: "tabIndex / onChange", type: "number / função", description: "Índice da aba ativa. Com onChange, o valor é controlado por quem usa o componente." },
    { name: "tabActiveRender", type: "boolean", description: "Padrão true: renderiza apenas a aba ativa. Com false, todas ficam montadas e as inativas ficam ocultas." },
    { name: "onClosed", type: "função", description: "Retorna o evento quando uma aba é fechada." },
    { name: "size / className / css / id", type: "SizeProps / string / CSSProperties / string", description: "Propriedades compartilhadas de layout e identificação." },
] as const;
