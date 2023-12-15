/* Vite的插件必須返回個Vite一個配置對象 */
// 設計插件的時候，最終返回一個函數 (更有彈性、高拓展性)
// 本次練習目標為建立resolve alias 路徑替換關係
// "@assets": "C:\Users\weiyu.chuang\Desktop\Vite\test-vite\src\assets" 

const fs = require("fs");
const path = require("path");

const diffDirAndFile = (dirFileArr = [], basePath) => {
    const result = {
        dirs: [],
        files: [],
    };
    dirFileArr.forEach(name => {
        // fs.stat返回一個stat對象，具有isDirectory函數可以用於判斷是否為資料夾
        const currentFileStat = fs.statSync(path.resolve(__dirname, basePath + "/" + name));
        // console.log("current file stat", "\n", currentFileStat.isDirectory());
        if (currentFileStat.isDirectory()) {
            result.dirs.push(name);
        } else {
            result.files.push(name);
        }
    });
    return result;
};

const getAllSrcDir = (keyName) => {
    const result = fs.readdirSync(path.resolve(__dirname, "../src"));
    const diffResult = diffDirAndFile(result, "../src");
    const resolveAliaseObj = {}; // 放的就是一個一個的別名配置 @assets: xxx
    diffResult.dirs.forEach((dirname) => {
        const key = `${keyName + dirname}`;
        const absPath = path.resolve(__dirname, "../src" + "/" + dirname);
        console.log(key, absPath);
        resolveAliaseObj[key] = absPath;
    });
    return resolveAliaseObj;
};

module.exports = ({ keyName = "@" } = {}) => {
    return {
        config(config, env) {
            console.log("config", config);
            // config: 當前vite.config中的配置對象
            // env: { mode: string, command: string }
            // config函數可以返回一個對象，代表viteconfig配置(就是你想要更改的部分)
            const resolveAliaseObj = getAllSrcDir(keyName);
            return {
                resolve: {
                    alias: resolveAliaseObj
                }
            };
        }
    };
};