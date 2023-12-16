module.exports = (options) => {
    return {
        transformIndexHtml: {
            enforce: "pre", // 控制插件的執行順序，提前到vite核心插件之前
            transform(html, ctx) {
                // ctx表示當前整個請求的執行上下文: api, index.html,
                console.log(html);
                return html.replace(/\<\%=\s*title\s*\%\>/g, options.inject.data.title);
            }
        }
    };
};