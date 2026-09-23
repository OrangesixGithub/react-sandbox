import path from "node:path";
import { defineConfig } from "vite";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const sandboxRoot = path.dirname(fileURLToPath(import.meta.url));
const libraryRoot = path.resolve(sandboxRoot, "../react");

export default defineConfig(({ mode }) => {
    const packageFile = mode === "package"
        ? path.resolve(sandboxRoot, "node_modules/@orangesix/react/package.json")
        : path.resolve(libraryRoot, "package.json");
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
                ...(mode === "package" ? [] : [{
                    find: /^@orangesix\/react\/(.+)$/,
                    replacement: `${path.resolve(libraryRoot, "src")}/$1`,
                }]),
            ],
        },
        server: {
            fs: { allow: [sandboxRoot, libraryRoot] },
        },
    };
});
