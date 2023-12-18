const mockjs = require("mockjs");

const data = mockjs.mock({
    "data|100": [
        {
            name: "@cname", //表示生成不同的中文名
            ename: "@first", //表示生成不同的英文名
            "id|+1": 1, //id自增
            time: "@time",
            test: "測試vite-plugin-mockjs的坑"
        }
    ]
});



module.exports = [
    {
        method: "post",
        url: "/api/users",
        response: ({ body }) => {
            // body:請求體
            return {
                code: 200,
                msg: "success",
                data: data
            };
        }
    }
];