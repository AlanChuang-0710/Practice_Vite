import { defineConfig } from "vite";
import terser from '@rollup/plugin-terser';
export default defineConfig({
    optimizeDeps: {
        exclude: [], //將指定數組中的依賴不進行依賴預構建
    },
    build: {
        outDir: "dist",
        assetsDir: "static",
        minify: "terser",
        rollupOptions: {
            plugins: [
                terser({
                    format: {
                        comments: true
                    },
                    mangle: {
                        keep_classnames: false,
                        reserved: [],
                    },
                })
            ],
            output: {
                assetFileNames: "[hash].[name].[ext]"
            },
        },
        assetsInlineLimit: 4096,
        emptyOutDir: true,
    },
    plugins: [
        {
            /* Vite Specific Hooks */
            // Vite 插件也可以提供钩子来服务于特定的 Vite 目标。这些钩子会被 Rollup 忽略。
            // Vite plugins can also provide hooks that serve Vite-specific purposes. These hooks are ignored by Rollup.
            config(options) {
                // console.log("config options 執行", options);
                return {
                    build: {
                        outDir: "dist"
                    }
                };
            },
            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    next();
                });
            },
            transformIndexHtml(html, ctx) {
                // console.log(ctx);
                return html.replace(/\<\%=\s*title\s*\%\>/g, "替換後文字");
            },
            configResolved(options) {
                // 整個配置文件的解析流程完畢以後，會調用的鉤子
                // vite再內部有一個默認的配置文件
                // console.log("options---------------------", "\n", options);
            },
            configurePreviewServer(server) {
                // 配置方法跟configureServer一樣
            },

            /* Universial Hooks */
            // 通用hook會被vite和rollup都執行一次
            options(rollupOptions) {
                // console.log("rollupOptions-------", rollupOptions);
            },
            buildStart(fullRollupOptions) {
                console.log("fullRollupOptions---------", fullRollupOptions);
            }
        }
    ]
});