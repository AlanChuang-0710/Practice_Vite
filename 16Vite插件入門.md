# Vite插件

**搭配test-vite > vite.base.config學習**

## 插件是甚麼?
> vite會在不同生命週期中調用不同的插件以達到不同的目的

1. 生命週期: 其實就和我們人一樣，vite從開始執行到執行結束，整個過程就是vite的生命週期

Vite的運行是否順序的，執行插件的順序依照配置項進行處理，

**詳見 https://vitejs.dev/guide/api-plugin 文檔中的Plugin Ordering**
插件執行優先順序如下:

Alias
User plugins with enforce: 'pre'
Vite core plugins
User plugins without enforce value
Vite build plugins
User plugins with enforce: 'post'
Vite post build plugins (minify, manifest, reporting)
