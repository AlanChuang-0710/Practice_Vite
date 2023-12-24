# [性能優化篇] cdn加速

**搭配vite-cdn > vite.config.js 學習**

cdn: content delivery network 內容分發網站

將我們依賴的第三方模塊全部寫成cdn的形式，保證自身代碼為小體積(體積小服務器端和客戶端的傳輸壓力就沒那麼大)


## 原理

步驟一: 在html中注入script標籤

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" style="null;/*startDM*/undefined/*endDM*/"></script>
```

步驟二: 修改vite.config.js中 build的rollup中的external配置
该选项用于匹配需要排除在 bundle 外部的模块
rollup external 文檔: https://cn.rollupjs.org/configuration-options/#external

## 以lodash為例

在vite.config.js下配置vite-plugin-cdn-import

import viteCDNPlugin from "vite-plugin-cdn-import";

    plugins: [
        viteCDNPlugin({
            modules: [{
                name: "lodash",
                var: "_",
                path: "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
            }]
        })
    ]

cdn: https://www.npmjs.com/package/vite-plugin-cdn-import
導出變量名: _


