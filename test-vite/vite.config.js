
/* 引入提示方法一: import {defineConfig} from "vite" */
// import { defineConfig } from "vite";

// export default defineConfig({
//     optimizeDeps: {
//         exclude: ["lodash-es"], //當遇到lodash-es這個依賴包時，不進行依賴預構建(預構建: 將內部的import整併到一個js當中)
//     }
// });


/* 引入提示方法二: 利用/**進行類型標註 */
/** @type import("vite").UserConfig */
// const viteConfig = {
//     optimizeDeps: {
//         exclude:[]
//     },
//     root:""
// }
// export default viteConfig;


/* 環境配置 */
import { defineConfig, loadEnv } from "vite";
import viteBaseConfig from "./vite.base.config";
import viteDevConfig from "./vite.dev.config";
import viteProdConfig from "./vite.prod.config";

// 策略模式 
const envResolver = {
    "build": () => {
        console.log("生產環境");
        return { ...viteBaseConfig, ...viteProdConfig };
    },
    "serve": () => {
        console.log("開發環境");
        return { ...viteBaseConfig, ...viteDevConfig };
        // 新配置裡是可能會配置envDir，例如開發時不讀取.env.development改讀取.envA這個名字的文件
    }
};

export default defineConfig(({ command, mode }) => {
    // command 默認可能為 "build" 或是 "serve" 依據vite --mode 參數而定
    console.log("mode", mode);
    console.log("command", command);

    // 為甚麼不能直接透過process.env直接獲取檔案呢?
    // 因為上述中envResolver可能已經修改envDir將默認配置檔案名(.env)修改為其他名字
    // 此時讀取process.env就可能為undefined
    // 透過loadEnv載入環境變量檔，傳入三個參數(模式、env當前存在位置、.env的前綴)
    // 注意: 無論開發或生產，.env共用環境變量都會被加載進去
    const env = loadEnv(mode, process.cwd(), ""); // 此行代表會讀取 C:\Users\weiyu.chuang\Desktop\Vite\test-vite\.env 的檔案
    // console.log("env/////", env);

    return envResolver[command]();
});