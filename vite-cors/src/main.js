fetch("/api").then(res => console.log(res.json()));

// 1.   如果沒有寫域名，瀏覽器會先幫我們做一步拼接
//      故上述請求會先變成http://127.0.0.1:5173/api

// 2.   接著將該請求傳給vite，vite發現該請求的path有配置跨域代理策略，
//      根據vite.config.js 中的 proxy配置重新求取請求。
//      將api替換為""，並改請求https://www.google.com/
