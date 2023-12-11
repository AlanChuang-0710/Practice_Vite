#vite.config.js中css的配置 (modules篇)

在vite.config.js中我們通過css屬性控制vite對css的處理行為

**練習的程式碼在 test-vite的 vite.base.config**

css配置項大多交由 postcss modules包進行處理
[postcss modules](https://github.com/webpack/loader-utils#interpolatename)

- localsConvention: 修改生成的配置對象的key的展示形式(駝峰還是下划線型式)
- scopeBehaviour: 配置當前的樣式為模塊化或全局化(樣式類名轉化後帶有hash就是開啟了模塊化的標誌)
- generateScopedName: 配置生成的類名的規格(為字符串，也可以由函數配置)
相關配置:https://www.npmjs.com/package/postcss-modules
- hashPrefix: 生成hash會根據你的類名 + 一些字符串...進行生成，如果想要生成更為獨特的hash，可以配置此項，配置的字符串將參與到hash生成。
- globalModulePaths: 代表不想要

