/**
 * Rota simulada do sandbox: status HTTP, atraso da resposta (ms) e corpo JSON.
 * `token` é o valor recebido no header `X-CSRF-TOKEN`.
 */
export type SandboxRoute = {
    status: number;
    delay: number;
    body: (token: string) => object;
};

export type SandboxRoutes = Record<string, SandboxRoute>;
