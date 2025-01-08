import { defineConfig } from "vite";

export default defineConfig({
    root: "client",
    build: {
        target: "esnext",
        outDir: "../dist/client",
        assetsDir: "_",
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            input: "client/index.html",
            output: {
                entryFileNames: "index.js",
                chunkFileNames: "chunks/[name]-[hash].js",
                assetFileNames: "assets/[hash].[ext]"
            }
        }
    },
    optimizeDeps: {
        include: ['/src/**/*.ts']
    },
    server: {
        open: true,
        proxy: {
            '/api': 'http://localhost:3000'
        }
    }
});
