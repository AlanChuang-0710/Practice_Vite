import { defineConfig } from "vite";

export default defineConfig({
    server: { // 開發服務器中的配置
        proxy: { //配置跨域解決方案
            "/api": {
                target: "https://www.google.com/",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''), //重寫api路徑
            }
        }
    }
});