export const calendarProps = [
    { name: "mode / control", type: "Controlled | HookForm", description: "Modo e controle do React Hook Form." },
    { name: "view", type: "date | month | year", description: "Seleção de data, mês ou ano." },
    { name: "format", type: "string", description: "Formato visual; padrão dd/mm/yy. Retorno ISO local, individual ou em lista conforme selectionMode." },
    { name: "selectionMode", type: "single | multiple", description: "single (padrão): string ISO ou null. multiple: lista ISO; limpar retorna []." },
    { name: "range", type: "boolean", description: "Somente em multiple: seleciona [início, fim] ISO. Fim null até completar; limpar retorna []." },
    { name: "minDate / maxDate", type: "Date | string | null", description: "Limites inclusivos; strings no formato ISO YYYY-MM-DD." },
    { name: "numberMonths", type: "number", description: "Quantidade de meses no painel." },
    { name: "appendTo", type: "self | HTMLElement | função", description: "Destino do painel." },
    { name: "required / disabled / readonly", type: "boolean", description: "Estados do campo." },
    { name: "error / ref / inputClassName", type: "string | Ref", description: "Feedback, referência HTML e classe do campo." },
] as const;
