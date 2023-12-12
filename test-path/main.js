/**
 * 我們如果寫相對路徑，node會嘗試拼接成絕對路徑
 * commonjs 規範注入幾個變量
 * 
 * 
 *
 * */

const fs = require("fs");
const path = require("path");
// const result = fs.readFileSync("./variable.css");
const result = fs.readFileSync(path.resolve(__dirname, "./variable.css"));
console.log(result.toString());

// node端讀取文件或者操作文件的時候，如果發現你用的是相對路徑，
// 則會使用process.cwd來進行相對應的拼接，
// process.cwd 獲取當前的node執行目錄 (current working directory)
// exports = module.exports = {} exports的指向與module.exports相同，
// 若更改exports指向，則module.exports與exports不再相同
// node js執行時會自動注入arguments 包含五個元素
// 分別為 module.exports, require函數, module, __filename, __dirname
console.log(arguments);
console.log(module);
(function (exports, require, module, __filename, __dirname) {
    // node運行時就是將程式碼放入類似的立即執行函數執行
}());
