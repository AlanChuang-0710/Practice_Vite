import { count } from "./counter.js";
console.log(count);

const env = import.meta.env;
console.log(env);

import indexLess from "./index.module.less";
import "./static.less";
console.log(indexLess); // 觀察vite處理css的默認值
// {
//     "header": "_header_1j3z8_1",
//     "div-content": "_div-content_1j3z8_5"
// }

import "./variable.css";


const divContainer = document.createElement("divContainer");
divContainer.innerText = "我是header中的div";
divContainer.className = indexLess["div-content"];
const div = document.createElement("div");
div.className = indexLess.header;
div.appendChild(divContainer);
document.body.appendChild(div);
