import { defineConfig } from "vite";
const postcssPresetEnv = require("postcss-preset-env");
// import { ViteAliases } from 'vite-aliases';
// import { default as postcssPresetEnv } from "postcss-preset-env"; // type : module時使用
import terser from '@rollup/plugin-terser';
// import { createHtmlPlugin } from "vite-plugin-html";
const MyViteAliases = require("./plugins/ViteAliases");
const createHtmlPlugin = require("./plugins/CreateHtmlPlugin");
const VitePluginMock = require("./plugins/VitePluginMock");
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
    },
    build: { //構建生產包時的配置策略
        outDir: "dist", // build出的文件位置，默認為dist
        assetsDir: "static", // 靜態資源輸出位置，默認為assets
        minify: "terser", // 程式碼壓縮
        rollupOptions: { //配置rollup的構建策略
            // 配置rollup的插件
            plugins: [
                // 配置terser 針對是否移除comment的配置
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
            output: { //控制輸出
                // 在rollup裡面，hash代表將文件名和文件內容進行組合計算得來的結果
                assetFileNames: "[hash].[name].[ext]"
            },
        },
        assetsInlineLimit: 4096, // 如果靜態資源小於4kb則轉換為base64字符，小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
        emptyOutDir: true, //清除已打包好的dist目錄中的所有文件
    },
    plugins: [
        MyViteAliases("@"),
        createHtmlPlugin({
            inject: {
                data: {
                    title: "首頁"
                }
            }
        }),
        // createHtmlPlugin({
        //     inject: {
        //         data: {
        //             title: "首頁"
        //         }
        //     }
        // }),
        //  ViteAliases({
        //      prefix: '@', // 默認情況下為@開頭，功能同reslve的alias
        //  }),
        VitePluginMock()
    ]
});