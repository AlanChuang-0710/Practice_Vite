import { defineConfig } from "vite";
const postcssPresetEnv = require("postcss-preset-env");
const path = require("path");

export default defineConfig({
    resolve: {
        // 別名
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@assets": path.resolve(__dirname, "./src/assets")
        }
    },
    optimizeDeps: {
        exclude: [], //將指定數組中的依賴不進行依賴預構建
    },
    // envPrefix配置vite注入"瀏覽器端"環境變量較驗時的變量前綴
    // 其他非以ENV_開頭的變量，不會透過import.meta.env傳入瀏覽器端
    envPrefix: "ENV_",
    css: { //對css的行為進行配置，最終交由postcss modules運行
        modules: { // 是對css模塊化的默認行為進行配置
            // localsConvention: "camelCase", // 配置轉化後的命名規範
            // localsConvention: "camelCaseOnly", // 配置轉化後的命名規範
            localsConvention: "dashesOnly", // 配置轉化後的命名規範
            scopeBehaviour: "local", // 配置當前的樣式為模塊化(樣式類名轉化後帶有hash)
            // generateScopedName: "[name]_[local]_[hash:5]"
            generateScopedName: (name, filename, css) => {
                // name: css中的類名
                // filename: css文件的絕對路徑
                // css: 當前的樣式
                // 配置成函數以後，返回值就決定了最終的類型
                return `${name}_${Math.random().toString(2).slice(5, 10)}`;
            },
            hashPrefix: "hello",
            globalModulePaths: ["./static.less"], //代表不參與模塊化的css檔案
        },
        preprocessorOptions: {
            less: { // 整個配置對象都會最終給到less的執行參數(全局參數)去
                // 在webpack裡，就給less-loader去配置就好
                math: "always",
                globalVars: { //全局變量
                    mainColor: "red"
                }
            },
            sass: {

            }
        },
        devSourcemap: true, // 開啟css的sourcemap
        // Vite的誕生，會讓postcss再火一次
        postcss: {
            plugins: [
                // 告訴postcss有些全局變量直接導入，並記錄下來
                postcssPresetEnv({
                    importFrom: path.resolve(__dirname, "./variable.css")
                })]
        }
    }
});