import "./src/imageLoader";
import jsonFile from "./src/assets/json/index.json";
import { name } from "./src/assets/json/index.json";

// Vite會將導入的json文件轉化為物件
// 也支持按需加載，以利tree shaking搖樹優化: 打包工具會自動幫忙移除沒有用到的方法與變量。
// 如果用的不是Vite，json文件的導入會作為一個json字符串形式存在。
console.log("jsonFile", jsonFile);
console.log("jsonFile", name);