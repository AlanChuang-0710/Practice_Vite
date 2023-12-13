#vite.config.js 中 css 的配置 (modules 篇)

在 vite.config.js 中我們通過 css 屬性控制 vite 對 css 的處理行為

**練習的程式碼在 test-vite 的 vite.base.config**

css 配置項大多交由 postcss modules 包進行處理
[postcss modules](https://github.com/webpack/loader-utils#interpolatename)

- localsConvention: 修改生成的配置對象的 key 的展示形式(駝峰還是下划線型式)
- scopeBehaviour: 配置當前的樣式為模塊化或全局化(樣式類名轉化後帶有 hash 就是開啟了模塊化的標誌)
- generateScopedName: 配置生成的類名的規格(為字符串，也可以由函數配置)
  相關配置:https://www.npmjs.com/package/postcss-modules
- hashPrefix: 生成 hash 會根據你的類名 + 一些字符串...進行生成，如果想要生成更為獨特的 hash，可以配置此項，配置的字符串將參與到 hash 生成。
- globalModulePaths: 代表不參與模塊化的 css 檔案
