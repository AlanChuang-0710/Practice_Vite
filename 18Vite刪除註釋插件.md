# Vite 刪除註釋功能

**搭配 test-vite > vite.base.config 學習**

**前置知識**
Vite 使用的 esbuild 在進行語法轉換時，就會進行刪除註釋 (見 esbuild legal comments 配置)
默認配置為以 //! or /\*! 開頭的註釋會在 build 時被保留，並移至檔案末端。
esbuild 問題: https://github.com/evanw/esbuild/issues/221
文檔: https://esbuild.github.io/api/#legal-comments

主要使用插件: @rollup/plugin-terser
Git 連結: https://www.npmjs.com/package/@rollup/plugin-terser
文檔: https://github.com/terser/terser#format-options
可以透過配置 format 中的 comment 決定註釋的處理方式

> pass true or "all" to preserve all comments, false to omit comments in the output, a regular expression string (e.g. /^!/) or a function.

format: {
comments: true
}
