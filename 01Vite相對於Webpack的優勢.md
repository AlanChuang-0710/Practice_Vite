Webpack問題:
  項目越大，熱更新的速度越慢，文件修改後的效果也要幾秒鐘才能在瀏覽器中反應出來。
起因: 項目越大，構件工具所有處理的 js 代碼就越多，這與 webpack 的構建過程有關係

```
yarn start
npm run dev
npm run start
```

webpack 能不能修改呢? 一旦要改，會動到 webpack 的命脈。
webpack 支持多種模塊化(因為工程可能運行在瀏覽器端)，其編譯原理，AST 抽象語法分析的工具，分析你寫的這個 js 當中有哪些導入和導出操作。

```javascript
// webpack允許我們這麼寫
// webpack 轉譯前
const lodash = require("lodash"); // commonjs 語法
import Vue from "vue"; // es6 module

// webpack 轉譯中
const lodash = webpack_require("lodash");
const Vue = webpack_require("vue");

// webpack 轉譯後
(function (modules) {
    function webpack_require() {}
    //入口是index.js
    // 通過webpack的配置文件得來的: webpack.config.js
    modules[entry](webpack_require)

}, ({
    "index.js": (webpack_require) => {
      const lodash = webpack_require("lodash");
      const Vue = webpack_require("vue");
    },
  }));
```

因為webpack支持多種模塊化，他一開始必須要統一模塊化代碼，所以意味著他必須要將所有的依賴全部讀一遍。

vite會不會直接把webpack幹翻? 不會，因為webpack側重點在於兼容各種環境，但vite是基於es modules，側重點在於瀏覽器端的開發體驗。