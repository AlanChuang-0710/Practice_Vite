const fs = require("fs");
const path = require("path");

module.exports = (options) => {
    // 做的事情就是攔截http請求
    // 當打給本地開發服務器的時候，viteserver服務器接管

    return {
        configureServer(server) {
            // 服務器的相關配置
            // 其實就是配置後端的中間件
            server.middlewares.use((req, res, next) => {
                if (req.url === "/api/users") {
                    const mockStat = fs.statSync("mock");
                    let responseData = "";
                    if (mockStat.isDirectory()) {
                        let mockResult = require(path.resolve(process.cwd(), "mock/index.js"));
                        console.log("mockResult", mockResult);
                        responseData = mockResult.find((item) => item.url === req.url);
                    }
                    res.setHeader("Content-type", "application/json");
                    return res.end(JSON.stringify(responseData.response)); //自動設置請求頭
                }
                next();
            });
        }
    };
};