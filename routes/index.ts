import type { Plugin } from "vite";
import { utilsRoutes } from "./utils.ts";
import type { SandboxRoutes } from "./types.ts";

/**
 * Todas as rotas simuladas, servidas em `POST /sandbox-api/<rota>`.
 * Para uma nova página, crie `routes/<página>.ts` e acrescente as rotas aqui.
 */
const allRoutes: SandboxRoutes = {
    ...utilsRoutes,
};

/**
 * Plugin do Vite que simula o backend. Só existe no servidor de desenvolvimento do sandbox.
 */
export function routes(): Plugin {
    return {
        name: "sandbox-routes",
        configureServer(server) {
            server.middlewares.use("/sandbox-api", (request, response, next) => {
                const route = allRoutes[request.url?.split("?")[0] ?? ""];
                if (request.method !== "POST" || !route) {
                    next();
                    return;
                }
                const token = String(request.headers["x-csrf-token"] ?? "sem token");
                setTimeout(() => {
                    response.statusCode = route.status;
                    response.setHeader("Content-Type", "application/json");
                    response.end(JSON.stringify(route.body(token)));
                }, route.delay);
            });
        },
    };
}
