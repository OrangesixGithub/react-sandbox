export const tooltipProps = [
    { name: "transition", type: "zoom | fade | slide", description: "Animação de entrada e saída. Padrão zoom; respeita a preferência por movimento reduzido." },
    { name: "children", type: "ReactNode", description: "Elemento ou conteúdo que aciona o tooltip." },
    { name: "content", type: "ReactNode | string", description: "Conteúdo do tooltip, incluindo elementos React." },
    { name: "position", type: "top | bottom | left | right | mouse", description: "Posição em relação ao alvo. Padrão right; o PrimeReact ajusta a posição nos limites da janela." },
    { name: "event", type: "hover | focus | both", description: "Evento de abertura. Padrão hover; focus e both aceitam o foco dos elementos filhos." },
    { name: "renderTo", type: "self | HTMLElement | função | null", description: "Destino do painel. Padrão self." },
    { name: "disabled", type: "boolean", description: "Desabilita a exibição do tooltip." },
    { name: "zIndex", type: "number", description: "Valor base do empilhamento do painel." },
    { name: "className / css", type: "string / CSSProperties", description: "Classes e estilos aplicados ao painel do tooltip." },
    { name: "onShow / onHide", type: "função", description: "Eventos disparados ao exibir e esconder o tooltip." },
] as const;
