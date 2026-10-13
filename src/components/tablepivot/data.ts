const regions = {
    Sudeste: { SP: ["São Paulo", "Campinas", "Santos"], MG: ["Belo Horizonte", "Uberlândia"], RJ: ["Rio de Janeiro", "Niterói"] },
    Sul: { PR: ["Curitiba", "Londrina"], SC: ["Florianópolis", "Joinville"], RS: ["Porto Alegre", "Caxias do Sul"] },
    Nordeste: { BA: ["Salvador", "Feira de Santana"], PE: ["Recife", "Olinda"], CE: ["Fortaleza"] },
} as const;

const products = [
    { produto: "Notebook", categoria: "Informática", preco: 4200 },
    { produto: "Monitor", categoria: "Informática", preco: 1100 },
    { produto: "Teclado", categoria: "Acessórios", preco: 180 },
    { produto: "Mouse", categoria: "Acessórios", preco: 95 },
    { produto: "Cadeira", categoria: "Mobiliário", preco: 950 },
    { produto: "Mesa", categoria: "Mobiliário", preco: 1350 },
];

const sellers = ["Ana", "Bruno", "Carla", "Diego", "Elisa", "Fábio", "Gabriela", "Heitor"];
const places = Object.entries(regions).flatMap(([regiao, states]) => {
    return Object.entries(states).flatMap(([estado, cities]) => (cities as readonly string[]).map(cidade => ({ regiao, estado, cidade })));
});

export type SaleRow = {
    regiao: string
    estado: string
    cidade: string
    vendedor: string
    produto: string
    categoria: string
    ano: number
    mes: number
    quantidade: number
    valor: number
};

/**
 * Gera vendas fictícias de forma determinística (mesma semente, mesmos dados).
 */
export function generateSales(total: number, seed = 7): SaleRow[] {
    let state = seed;
    const random = () => {
        state = (state * 1664525 + 1013904223) % 4294967296;
        return state / 4294967296;
    };

    return Array.from({ length: total }, () => {
        const place = places[Math.floor(random() * places.length)];
        const product = products[Math.floor(random() * products.length)];
        const quantidade = 1 + Math.floor(random() * 10);
        return {
            ...place,
            vendedor: sellers[Math.floor(random() * sellers.length)],
            produto: product.produto,
            categoria: product.categoria,
            ano: 2024 + Math.floor(random() * 3),
            mes: 1 + Math.floor(random() * 12),
            quantidade,
            valor: Math.round(quantidade * product.preco * (0.85 + random() * 0.3) * 100) / 100,
        };
    });
}

/**
 * Tamanho aproximado dos dados em MB, como JSON.
 */
export function jsonSize(data: unknown) {
    return (new Blob([JSON.stringify(data)]).size / 1024 / 1024).toFixed(1);
}
