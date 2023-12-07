import { defineConfig } from "vite";
export default defineConfig({
    optimizeDeps: {
        exclude: [] // 將指定數組中的依賴不進行依賴預構建
    },
    envPrefix: "ENV_", // 配置vite注入用戶端環境變量較驗時的變量前綴
});