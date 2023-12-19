module.exports = (options) => {
    return {
        transformIndexHtml: {
            order: "pre", // 控制插件的執行順序，提前到vite核心插件之前
            handler(html, ctx) {
                // ctx表示當前整個請求的執行上下文: api, index.html,
                // console.log(html);
                console.log("ctx--------------", ctx);
                return html.replace(/\<\%=\s*title\s*\%\>/g, options.inject.data.title);
            }
        }
    };
};