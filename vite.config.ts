import path from "node:path";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { existsSync, readFileSync } from "node:fs";

const sandboxRoot = path.dirname(fileURLToPath(import.meta.url));
const libraryRoot = path.resolve(sandboxRoot, "../react");

/**
 * Modos do sandbox:
 * - `dev` → componentes lidos de `react/src` (desenvolvimento com HMR);
 * - `dev:package` → componentes lidos de `react/dist` (pacote gerado, igual ao consumidor).
 */
export default defineConfig(({ mode }) => {
    const isPackage = mode === "package";
    const libraryDir = path.resolve(libraryRoot, isPackage ? "dist" : "src");
    const packageFile = path.resolve(isPackage ? libraryDir : libraryRoot, "package.json");
    const styleFile = isPackage
        ? path.resolve(libraryDir, "style.css")
        : path.resolve(libraryDir, "style/style.css");

    if (isPackage && !existsSync(packageFile)) {
        throw new Error("Rode `npm run build` em ../react antes do `dev:package`.");
    }

    const packageVersion = (JSON.parse(readFileSync(packageFile, "utf8")) as { version: string }).version;

    return {
        define: {
            __ORANGESIX_VERSION__: JSON.stringify(packageVersion),
        },
        plugins: [
            {
                name: "watch-orangesix-version",
                configureServer(server) {
                    server.watcher.add(packageFile);
                    server.watcher.on("change", async (changedFile) => {
                        if (path.resolve(changedFile) === packageFile) {
                            await server.restart();
                        }
                    });
                },
            },
            react(),
            tailwindcss(),
        ],
        resolve: {
            dedupe: [
                "react",
                "react-dom",
            ],
            extensions: [
                ".mjs",
                ".js",
                ".mts",
                ".ts",
                ".jsx",
                ".tsx",
                ".json",
                ".d.ts",
            ],
            alias: [
                {
                    find: /^@assets\/(.+)$/,
                    replacement: `${path.resolve(sandboxRoot, "assets")}/$1`,
                },
                {
                    find: /^@orangesix\/react\/style\.css$/,
                    replacement: styleFile,
                },
                {
                    find: /^@orangesix\/react\/(.+)$/,
                    replacement: `${libraryDir}/$1`,
                },
            ],
        },
        server: {
            fs: { allow: [sandboxRoot, libraryRoot] },
        },
    };
});
