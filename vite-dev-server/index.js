const Koa = require("koa");
const app = new Koa();
const fs = require("fs");
const path = require("path");

// 不同的宿主環境會賦予JS不同的能力
// document.querySelector("") 瀏覽器賦予js
// const fs = reauire("fs") node環境注入js

// 當請求來臨時就會直接進入到use註冊的回調函數中
// 相當於express的中間件
app.use(async (ctx) => {
    // context上下文 request-->請求信息；response --> 響應信息
    // console.log("ctx request", ctx.request);
    // console.log("ctx response", ctx.response);

    if (ctx.request.url === "/") {
        const indexContent = await fs.promises.readFile(path.resolve(__dirname, "./index.html")); //服務器端一般不會這麼做
        // console.log("idnexContent", indexContent.toString());
        ctx.response.body = indexContent;
        ctx.response.set("Content-Type", "text/html");
    }
    if (ctx.request.url === "/main.js") {
        const mainContent = await fs.promises.readFile(path.resolve(__dirname, "./main.js")); //服務器端一般不會這麼做
        // console.log("idnexContent", indexContent.toString());
        ctx.response.body = mainContent;
        ctx.response.set("Content-Type", "text/javascript");
    }

    /* 捕獲vue文件 */
    // 將vue語法轉化為js文件
    if (ctx.request.url === "/App.vue") {
        const mainVueContent = await fs.promises.readFile(path.resolve(__dirname, "./App.vue")); //服務器端一般不會這麼做
        // 如果是vue文件，會做一字符串替換 mainVueContent.toString()，透過正則尋找關鍵詞，如: <template>...
        // AST語法分析 ==> Vue.createElement() 構建原生的dom
        ctx.response.body = mainVueContent;
        ctx.response.set("Content-Type", "text/javascript");
    }
});

app.listen(5173, () => {
    console.log("Vite dev server is running on port 5173");
});
